export const Post = () => {
  const post = document.createElement('div');
  post.classList.add('div-post');
  post.innerHTML = `
  <div class='header-container'>
    <figure class='logo'><img src='./assets/logo/runners-360px.png' alt='Logo Runners' id='logo'></figure>
  </div>
  <div class="container">
    <section>
      <form id='form-container'>
        <textarea class='post' id='newPost'></textarea>
        <button type='button' class='btn' id='btn'>Postar</button>
      </form>
    </section>  
  </div>
  <hr/>
  <div class='' id='post-content'></div>
    
`;

  const btnPost = post.querySelector('#btn');
  const textPost = post.querySelector('#newPost');
  const postContent = post.querySelector('#post-content');

  const addCardToScreen = () => {
    const infUser = firebase.auth().currentUser;
    const textSave = textPost.value;
    postContent.innerHTML += `
            <div class='post-card'>
            <img src='${infUser.photoURL || '../../assets/Photo_Default.png'}' alt='Imagem do Usuario' id='photo'>
              <h2 class='name'>${infUser.displayName}</h2>
              <p class='text'>${textSave}</p>
              <div class='btn'>
              <button id='like'><p id='show-like'>❤️</p></button>
              </div>
            </div>
    `;
  };

  const creatPost = () => {
    const infCreatUser = firebase.auth().currentUser;
    const textToSave = textPost.value;
    const userPost = {
      displayName: infCreatUser.displayName,
      photo: infCreatUser.photoURL,
      text: textToSave,
    };
    firebase.firestore().collection('posts').add(userPost).then(() => {
      // console.log('dados salvo');
      addCardToScreen(userPost);
    });
  };

  const obtainPost = () => {
    firebase.firestore().collection('posts').orderBy('date', 'desc').get()
      .then((snapshot) => {
        // para retornar tudo que tem dentro.
        // data para puxar os dados
        // console.log(snapshot);
        snapshot.forEach((doc) => {
          // console.log(doc.id, ' => ', doc.data());
          addCardToScreen(doc);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    creatPost();
    obtainPost();
  });

  return post;
};
