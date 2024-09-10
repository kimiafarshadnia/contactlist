from fastapi import APIRouter, HTTPException
from typing import List
from backend.models import Contact
from pydantic import ValidationError

router = APIRouter()

# Simulated in-memory database for contacts
contacts_db = []

# POST endpoint to add a contact
@router.post("/contacts", response_model=Contact)
async def add_contact(contact: Contact):
    try:
        contacts_db.append(contact)
        return contact
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))

# GET all contacts
@router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    return contacts_db

# GET a specific contact by ID
@router.get("/contacts/{contact_id}", response_model=Contact)
async def get_contact(contact_id: int):
    for contact in contacts_db:
        if contact.id == contact_id:
            return contact
    raise HTTPException(status_code=404, detail="Contact not found")

# PUT endpoint to update a contact by ID
@router.put("/contacts/{contact_id}", response_model=Contact)
async def update_contact(contact_id: int, updated_contact: Contact):
    for index, contact in enumerate(contacts_db):
        if contact.id == contact_id:
            contacts_db[index] = updated_contact
            return updated_contact
    raise HTTPException(status_code=404, detail="Contact not found")

# DELETE endpoint to delete a contact by ID
@router.delete("/contacts/{contact_id}")
async def delete_contact(contact_id: int):
    for contact in contacts_db:
        if contact.id == contact_id:
            contacts_db.remove(contact)
            return {"message": "Contact deleted"}
    raise HTTPException(status_code=404, detail="Contact not found")
