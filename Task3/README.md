# Task 3 – ERD Design for Walmart Pet Department
This task focuses on designing a **normalized relational database schema** for Walmart’s Pet Department. The goal is to consolidate multiple data sources into a single source of truth and model real-world entities and their relationships accurately.
---
## Problem Overview
The database design must support:
- Multiple types of pet products
- Customers and their purchase transactions
- Shipments between Walmart locations
- Product quantities per shipment
- Proper normalization and scalability
---
## Entities Modeled
- **Product**
  - Pet Food
  - Pet Toys
  - Pet Apparel
- **Animal**
- **Manufacturer**
- **Customer**
- **Transaction**
- **Transaction_Product (Join Table)**
- **Shipment**
- **Shipment_Product (Join Table)**
- **Location**
---
## Design Highlights
- Fully normalized schema (3NF)
- Many-to-many relationships handled using join tables
- Clear primary and foreign key relationships
- Designed for scalability and easy querying
- Avoids data redundancy
---
## Files Included
- `PetDepartment_ERD.pdf / .png` – Entity Relationship Diagram
- `PetDepartment_ERD.puml` (optional) – PlantUML source
- `README.md` – Task documentation
---
## Key Takeaways
This task demonstrates:
- Strong understanding of relational databases
- Ability to translate business requirements into schema design
- Practical application of normalization principles
- Real-world data modeling skills
---
