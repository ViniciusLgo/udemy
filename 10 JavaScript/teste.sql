SELECT
    e.cpf as employee_cpf,
    r.id as employee_role,
    e.id as employee_id,
    e.name as employee_name,
    d.id as dependent_id,
    d.name as dependent_name,
    d.cpf as dependent_cpf,
    d.employee_id as dependent_for
FROM
    employee e
    LEFT JOIN dependent d on e.id = d.employee_id
    INNER JOIN role r on r.id = e.role_id