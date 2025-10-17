import { useState } from "react";

type FormData = {
  nombre: string;
  correo: string;
  genero: string;
  comentarios: string;
  intereses: string[];
};

export default function Formulario() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    correo: "",
    genero: "",
    comentarios: "",
    intereses: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setForm((prev) => {
        const intereses = checked
          ? [...prev.intereses, value]
          : prev.intereses.filter((i) => i !== value);
        return { ...prev, intereses };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Formulario enviado ✅\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg"
    >
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-8">
        Formulario React + Tailwind v4
      </h1>

      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold mb-1">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block text-sm font-semibold mb-1">
            Correo
          </label>
          <input
            id="correo"
            type="email"
            name="correo"
            placeholder="tucorreo@ejemplo.com"
            value={form.correo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Género */}
        <div>
          <label htmlFor="genero" className="block text-sm font-semibold mb-1">
            Género
          </label>
          <select
            id="genero"
            name="genero"
            value={form.genero}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Selecciona...</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Intereses */}
        <div>
          <p className="block text-sm font-semibold mb-2">Intereses</p>
          <div className="flex flex-wrap gap-4">
            {["Programación", "Música", "Deporte"].map((i) => (
              <label key={i} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="intereses"
                  value={i}
                  checked={form.intereses.includes(i)}
                  onChange={handleChange}
                  className="mr-2 accent-blue-600"
                />
                {i}
              </label>
            ))}
          </div>
        </div>

        {/* Comentarios */}
        <div>
          <label
            htmlFor="comentarios"
            className="block text-sm font-semibold mb-1"
          >
            Comentarios
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            placeholder="Escribe tus comentarios aquí..."
            value={form.comentarios}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
