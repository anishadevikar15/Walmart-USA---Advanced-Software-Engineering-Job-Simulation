# Task 2 – UML Design for a Configurable Data Processor
This task focuses on **software design and system architecture** rather than implementation. It involves designing a **UML class diagram** for a dynamically reconfigurable data processing pipeline, developed as part of the **Walmart USA Advanced Software Engineering Virtual Experience Program (Forage)**.
---
##  Problem Overview
The goal of this task was to design a data processor that can:
- Operate in multiple **processing modes**
- Dynamically switch between different **database backends**
- Be easily **extensible** to support new modes and databases in the future
The emphasis was on **clean architecture, abstraction, and design principles**, not low-level implementation details.
---
##  System Design Summary
###  Core Processor
- A central `DataProcessor` component receives incoming `DataPoint` objects.
- The processor exposes a `configure(mode, database)` method to change behavior at runtime.
- The `process(DataPoint)` method delegates work based on the current configuration.
---
###  Processing Modes (Strategy Pattern)
The processor supports multiple operating modes:
- **Dump Mode** – Drops incoming data
- **Passthrough Mode** – Inserts data into the configured database
- **Validate Mode** – Validates data and then inserts it
Each mode implements a common processing interface, allowing new modes to be added without modifying the core processor.
---
### Database Connectors (Strategy + Factory Pattern)
The design supports multiple database systems:
- Postgres
- Redis
- Elastic
Each database connector provides abstract operations such as:
- `connect()`
- `insert(DataPoint)`
- `validate(DataPoint)`
A factory component is used to create database connectors, isolating database-specific construction logic.
---
## Design Principles Applied
- **Strategy Pattern** – Used for both processing modes and database connectors
- **Factory Pattern** – Used for database connector creation
- **SOLID Principles**
  - Single Responsibility
  - Open/Closed Principle
  - Dependency Inversion
- **Separation of Concerns**
- **Extensibility and Maintainability**
---
## Files Included
- `DataProcessor_UML.png` / `DataProcessor_UML.pdf`  
  UML class diagram representing the system design
- `DataProcessor.puml` (optional)  
  PlantUML source used to generate the diagram
- `README.md`  
  Documentation for Task 2
---
## Key Takeaways
This task demonstrates the ability to:
- Translate business requirements into clean system design
- Model extensible architectures using UML
- Apply design patterns appropriately
- Think from a product and scalability perspective
---
