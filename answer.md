# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using a `db.json` file is acceptable for learning, prototyping, or very small applications, but it is not suitable for real-world production systems.

### Limitations of File-Based Storage

Performance
Every read or write operation requires loading the entire file into memory and writing it back to disk. As data grows, this becomes slow and inefficient, especially with frequent requests.

Scalability
File-based storage does not scale well. It cannot efficiently handle large datasets, high traffic, or multiple users accessing data simultaneously.

Concurrency Issues
Multiple users or requests accessing the file at the same time can cause data corruption or overwrites because there is no proper locking or transaction control.

Reliability
If the server crashes during a write operation, the file may become corrupted, leading to data loss.

Lack of Advanced Features
File-based storage does not support indexing, transactions, relationships, or complex queries, which are essential for real applications.

---

## 2. Ideal Characteristics of a Database System

A proper database system provides much more than simple data storage.

### Performance

Databases are optimized for fast data retrieval and updates using indexing, caching, and query optimization techniques.

### Concurrency

They allow multiple users or processes to read and write data simultaneously without conflicts, using locking and transaction mechanisms.

### Reliability

Databases ensure data is not easily lost through backups, logs, and recovery mechanisms.

### Data Integrity

Rules such as constraints, primary keys, foreign keys, and validations ensure that stored data remains accurate and consistent.

### Scalability

Databases can handle growing amounts of data and increased traffic by scaling vertically (better hardware) or horizontally (distributed systems).

### Fault Tolerance

If part of the system fails, databases are designed to recover automatically and continue operating with minimal data loss.

---

## 3. Types of Databases and Their Use Cases

Broadly, databases can be classified into two main types.

### Relational Databases (SQL)

Relational databases store data in structured tables with rows and columns and use SQL for querying.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use Cases:**

* Banking and financial systems
* E-commerce applications
* School and college management systems
* Any application requiring strong data consistency and relationships

They are ideal when data has clear relationships and requires strict integrity.

---

### Non-Relational Databases (NoSQL)

NoSQL databases store data in flexible formats such as documents, key-value pairs, graphs, or wide columns.

**Examples:** MongoDB, Redis, Cassandra, Firebase

**Use Cases:**

* Social media platforms
* Real-time chat applications
* Big data and analytics systems
* Applications with rapidly changing or unstructured data

They are suitable for high scalability, large volumes of data, and flexible schemas.

