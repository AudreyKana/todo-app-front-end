export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer" + user.accessToken };
  } else {
    return {};
  }
}

// ce code vérifie le stockage pour l'élément user. au cas ou il existe une connexion user avec accesToken(JWT), on renvoie l'en-tete d'autorisation HTTP. au cas contraire on renvoie un tableau vide.
