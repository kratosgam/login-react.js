import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
  // Estados para armazenar as entradas do usuário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemplo de como você usaria os dados:
    console.log("Enviando dados:", { email, password });

    // Aqui entraria sua lógica de autenticação (ex: fetch para API)
    alert(`Tentativa de login com: ${email}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Acessar a página</h2>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="form-icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="form-icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar-me
          </label>
          <a href="#">Esqueci minha senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
