export function ListaPacientes({ pacientes = [] }) {
   if (pacientes.length === 0) {
      return <p className="lista-vazia">Nenhum paciente cadastrado ainda.</p>;
   }

   return (
      <ul className="lista-pacientes">
         {pacientes.map((p, i) => (
            <li key={i} className="paciente-item">
               <span className="paciente-nome">{p.nome}</span> -{" "}
               <span className="paciente-idade">{p.idade} anos</span> -{" "}
               <span className="paciente-pressao">
                  {p.pressaoSistolica} x {p.pressaoDiastolica} mmHg
               </span>
            </li>
         ))}
      </ul>
   );
}