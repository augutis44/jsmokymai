import Role from "./Role"

const VisosRoles = () => {
    const roles = [
        {
            role: 'gynejas',
            kiekis: 5
        },
        {
            role: 'puolejas',
            kiekis: 10
        },
        {
            role: 'gelbetojas',
            kiekis: 2
        },
    ]

    const arDaugZaideju = () => {
        let kiekis = roles.reduce((sum, next) => sum + next.kiekis, 0);

        return kiekis >= 20 ? 'daugiau' : 'maziau'
    }

    return (
        <div>
            <h1> -------- Roles -------- </h1>

            <p>Komandoje yra {arDaugZaideju()} nei 20 zaideju</p>

            {roles.map((role, i) => <Role key={i} role={role.role} kiekis={role.kiekis} />)}

        </div>
    )
}

export default VisosRoles