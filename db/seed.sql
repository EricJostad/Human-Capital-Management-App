USE humancapital_DB;

INSERT INTO departments (name)
VALUES ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Developer", 100000.00, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Jostad", 1, 1);