import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'
 
import LogoTipo from '../images/Logotipo.svg';
import '../styles/pages/login-page.css';

function LoginPage () {
	return (
		<div id="login-container">
			<section >
				<img src={LogoTipo} alt="an emoji smiling written happy"/>

				<div className="location">
					<strong>Cidade legal</strong>
					<span>Estado mais legal</span>
				</div>
			</section>
			
			<main>
				<div id="main-container">
					<h1>Fazer login</h1>

					<form action="">
						<label htmlFor="email"><legend>E-mail</legend></label>
						<input type="text" name="email" id="email"/>
						
						<label htmlFor="password"><legend>Senha</legend></label>
						<input type="password" name="password" id="password"/>
						
						<div className="utilities-group">
							<div id="remember-me">
								<input type="checkbox" name="remember" id="remember"/>
								<label htmlFor="remember">lembrar-me</label>
							</div>
							<a id="password-remember" href="">Esqueci minha senha</a>
						</div>
						<button>Entrar</button>
					</form>							
				</div>
				<Link className="goback" to="/">
					<FiArrowLeft size={24} color="#15C3D6" />
				</Link>
			</main>
		</div>
	);
}

export default LoginPage;