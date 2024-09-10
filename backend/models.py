from pydantic import BaseModel

class Contact(BaseModel):
    id: int
    name: str
    lastname: str
    tel: str
    email: str  # New email field
    categori: str  # Work, Friend, etc.
    # Optionally keep birthday, if necessary
