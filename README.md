# My Healthy Dashboard

Réalisé par:
Rémy GHIDAGLIA et Marine MICHENAUD
Gr02A OCRES, ECE Paris
2020

***

Le projet a pour but de configurer un tableau de bord (dashboard) sur notre alimentation et notre activité physique..
Ce tableau de bord contient différents widgets permettant de visualiser les composants et les nutriments d'un produit, l'impact écologique de celui-ci, s'il est sain ou non, le nutriscore du produit et un tableau récapitulatif de l'activité physique de plusieurs utilisateurs.

## Lancer le projet

Avant de lancer le projet vous aurez besoin d'installer npm pour gérer les bibliothèques de programmation Javascript pour Node.js.
Pour cela, ouvrez 2 terminaux en simultané.
Mettez vous dans le dossier backend :
    - cd .\backend\
Puis lancez toutes ces commandes pour faire toutes les configurations nécessaires :
    - npm install express cors mongoose dotenv
    - npm install -g nodemon
    - Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Ensuite la connexion au serveur est prête à être lancée.   
    - nodemon server

Mettez vous dans le dossier app-frontend.
    - cd .\app-frontend\
    - npm install
    - npm install axios

Ensuite le projet est prêt à être lancé.
    - npm start

## Difficultés

Le projet s'est bien passé, il y a eu une bonne entente et de l'entraide entre nous deux.
Nous n'avons pas eu de quelconques difficultés mis à part la partie storybook qui nous était inconnu auparavant et qui s'est fait à la toute fin du projet.
Nous avons aussi remarqué un petit problème de responsive sur la page principale que nous n'avons pas encore réussi à résoudre. Ainsi qu'un problème de connexion au serveur lorsuqe l'on veut ajouter un exercice physique ou le modifier.

## Notre outil de projet
    
https://trello.com/b/40hqxtRL/planning