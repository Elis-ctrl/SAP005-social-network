// import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Profile = () => {
  const user = (firebase.auth().currentUser);
  const profile = document.createElement('div');
  profile.classList.add('div-profile');
  profile.innerHTML = `
<div class="container">
<header class="header">
<img src='./assets/logo/runners-40px.png' alt='Logo Runners' id='logo' class="logo"></a>
<input class="menu-btn" type="checkbox" id="menu-btn" />
<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
<ul class="menu">
  <li id='home'><a href="#">Home</a></li>
  <li id='post'><a href="#">Post</a></li>
  <li id='profile'><a href="#">Perfil</a></li>
  <li id='logOut'><a href="#">Sair</a></li>
</ul>
</header>

<div class='form-login'>
<hr />
<form>
<img class='img-profile' src='${user.photoURL || '../../assets/Photo_Default.png'}' alt='Imagem do Usuario' id='logo'> 
<p class='text' id='name'>${user.displayName}</p>
</form>

<div>
<input class="button" id='submit-home' type="submit" value="Entrar"/> 
</div>
<form>

<p class='text' id='email'>${user.email}</p>

</div>
<div>
</form>
<div class='profile-btn'>
<button id='deleteuser'>Deletar Perfil</button>
<button id='cancelbtn'>Cancelar</button>

    
      
<footer>
  <p>
      Made with <i class="fa fa-heart"></i> | Devas 
      <i class="fab fa-github"></i>
      <a target="_blank" href="#">  Cris Mantovani</a>
      <i class="fab fa-github"></i>
      <a target="_blank" href="#"> Elis Brasil</a>
      <i class="fab fa-github"></i>
      <a target="_blank" href="#"> Luciana Pereira</a> @
      <i class="fab fa-dev">
      <a target="_blank" href="#"></i>&nbsp;< Laboratoria ></a>
    </p>
  </footer>
  </div>
      </div>
`;

  // Menu

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      icon.classList.toggle('open');
    });
  });

  // deletar o usuario
  const del = profile.querySelector('#deleteuser');

  del.addEventListener('click', () => {
    firebase.auth().currentUser
      .then(() => {
        window.confirm('Você realmente deseja deletar seu perfil?');
        user.delete();
      })
      .then(() => {
        alert('Usuario deletado');
        onNavigate('/home');
      })
      .catch((error) => {
        const alert = error.message;
        alert(alert);
      });
  });

  const cancelBtn = profile.querySelector('#cancelbtn');

  cancelBtn.addEventListener('click', () => {
    onNavigate('/post');
  });

  return profile;
};
