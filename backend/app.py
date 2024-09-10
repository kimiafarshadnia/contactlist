from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.contact_controller import router as contact_router

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to match your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the contact router
app.include_router(contact_router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Contact Management API"}
