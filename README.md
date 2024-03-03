# Conception de d'application HOVA

## À propos

HOVA est une application de sport qui propose à ses utilisateurs de pouvoir suivre un programme sportif et ainsi avoir un suivi quotidien, entrainement après entrainement, suivre ses efforts, ses progrès et ses objectifs. L’application propose à ses utilisateurs deux options :
- Pouvoir s’entrainer avec des programmes déjà préconçu et certifier par des professionnels. En fonction les objectifs ; perte de poids, prise de masse ou autre.
- Pouvoir personnaliser ses programmes, c’est-à-dire que l’utilisateur en fonction de son objectif, aura la possibilité de personnaliser ses séances en choisissant les exercices.
Toutes ces données devront communiquer avec une base de données via une API REST pour recevoir la liste et les détails de chaque programme d’entrainement (machine à utiliser s’il y en a l’utilité, le nombre de séries et répétitions ainsi que quelques conseils et informations concernant l’exercice etc). L’application devra guider l’utilisateur tout au long de sa séance d’entrainement.

- 🪧 [À propos](#à-propos)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🤝 [Contribution](#contribution)
- 🏗️ [Construit avec](#construit-avec)
- 📚 [Documentation](#documentation)
- 🏷️ [Règle de Gestion](#Règle)
- 📝 [Licence](#licence)

## Prérequis

[Liste de tous les éléments nécessaires pour le bon fonctionnement du projet avec description + lien vers la documentation]

## Installation

[Étapes avec exemples des commandes à lancer pour installer le projet en local]

## Utilisation

[### Sous-titre + description avec exemple des commandes à lancer pour l'ensemble des actions disponibles à l'utilisation dans un mode de développement]

## Contribution

[### Sous-titre + description avec exemple des commandes à lancer pour l'ensemble du flux de contribution sur le dépôt]

## Construit avec

### Langages & Frameworks

- Angular
- IONIC
- Capacitor
- Node JS

### Outils

#### CI

- Github Action

#### Déploiement

VPS simplon

## Documentation



## Règle

Règle de Gestion des Comptes Utilisateurs 

* Chaque utilisateurs doit s'inscrire avec une adresse e-mail valide, un nom d'utilisateur et un mot de passe sécurisé conforme aux normes définies (longueur, complexité).
* Les utilisateurs doivent confirmer leur adresse e-mail via un lien d'activation envoyé à leur adresse pour finaliser la création du compte.

Règles de Gestion des Programmes

* Les Programmes ne peuvent être soumis que si le nom est renseigné
* Chaque Programmes est associé a au minumum une séance
* Les utilisteurs peuvent mettre en favorie les programmes
 
Règles de Gestion des Séances

* Les Séances ne peuvent être soumis que si le nom, le groupe musculaire ainsi que l'utilisation ou non de matériel sont renseignés
* Chaque Séances est associé a au minumum un exercices
* Les utilisteurs peuvent mettre en favorie les séances

Règles de Gestion des Exercices

* Les Exercices ne peuvent être soumis que si le nom, le nombre de répétition, le nombre de série et le temps de repos sont renseignés
* Les utilisteurs peuvent mettre en favorie les exercices

Règles de Gestion du masse corporelle

* Chaque utilisateur peut renseigner son poids et sa taille afin d'avoir un visuel sur son evolution corporelle

Règles de Gestion de localisation de salle de sport

* Les utilisateurs peuvent acceder au salle de sport a proximiter de leur position si besoin
* Les utilisteurs peuvent mettre en favorie les salles sports

  
## RBAC


| Permissions                                                   		      | Administrateur 	| Propriétaires/Agence Immobilière 	| Locataire 	| Visiteur 	|
|-----------------------------------------------------------------------|:--------------:	|:--------------------------------:	|:--------------:	|:----:	|
|                     	**Permission Administrateur**                 	  |                	|           						                  |                	|      	|
| Gérer les comptes utilisateurs (création, supression, suspension) 	   |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Modérer les avis (validation, supression des avis inappropriés) 		    |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Accéder à toutes les fiches locataires et propriétaires				           |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Gérer le système de notifications et les paramètres de l'application	 |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
| Analyser les données d'usage de l'application 						                  |        ✅       |     			❌     				               |        ❌       	|   ❌  	|
|            			**Permission Propriétaires/Agence**	           	        |                	|     			      				 |                	|      	|
| Créer des fiches locataire avec leur consentement					 	              |        ✅       |     			✅     				|        ❌      	|   ❌  	|
| Publier des avis sur les locataires									                          |        ✅       |     			✅     				|        ❌      	|   ❌  	|
| Recevoir des notifications sur les avis concernant 								
  leurs propriétés ou sur eux-mêmes										                           |        ✅       |     			✅     				|        ❌       	|   ❌  	|
| Consulter et répondre aux avis reçus									                         |        ✅       |     			✅     				|        ❌       	|   ❌  	|
|            			**Permission Locataire**	            		                 |                	|   							 	|                	|      	|
| Créer des fiches propriétaire											                              |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Publier des avis sur les propriétaires et logements					              |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Recevoir des notifications sur les avis publiés à leur sujet			       |        ✅       |     			❌     				|        ✅       	|   ❌  	|
| Consulter et répondre aux avis reçus									                         |        ✅       |     			❌     				|        ✅       	|   ❌  	|
|            **Permission Visiteir(Utlisateir non authentifié)**	       |                	|     			      				|                	|      	|
| Consulter les classements et les avis publics                       	 |        ✅       |     			✅     				|        ✅       	|   ✅  	|
| Rechercher des logements et propriétaires                       		    |        ✅       |     			✅     				|        ✅       	|   ✅  	|

## Dictionnaire

# Dictionnaire de données

Table User
| Champ          | Type de Données | Description                             | Contrainte                        | Exemple                                 |
|----------------|-----------------|-----------------------------------------|-----------------------------------|-----------------------------------------|
| ID             | ID              | Identifiant unique de l'utilisateur     | Clé primaire                      | `1`                                     |
| UserName       | VARCHAR         | Nom d'utilisateur                       | Unique, Non nul                   | `Youssef`                               |
| Email          | VARCHAR         | Adresse mail                            | Unique, Non nul                   | `youssef@hova.com`                      |
| PasswordHash   | VARCHAR         | Hash du mot de passe                    | Non nul                           | `54ere543ccddez35dcrvxesdfef55334`      |
| DateCreated    | DATETIME        | Date de création du compte              | Non nul                           | `2024-02-02 12:00:00`                   |
| LastLogin      | DATETIME        | Date de la dernière connexion           |                                   | `2024-02-28 08:30:00`                   |


Table Program
| Champ         | Type de Données | Description                           | Contrainte                         | Exemple                                 |
|---------------|-----------------|---------------------------------------|------------------------------------|-----------------------------------------|
| ID            | ID              | Identifiant de l'utilisateur          |   Clé primaire                                 | `1`                                     |
| Name          | VARCHAR         | Nom                                | Non nul                            | `Prise de Masse`                               |

Table Workout
| Champ         | Type de Données | Description                           | Contrainte                         | Exemple                                 |
|---------------|-----------------|---------------------------------------|------------------------------------|-----------------------------------------|
| ID            | ID              | Identifiant de seance                 |    Clé primaire                                | `1`                                     |
| Name          | VARCHAR         | Nom                                | Non nul                            | `Prise de Masse`                        |
| NameMuscle    | VARCHAR         | Muscle                                | Non nul                            | `Pecs`                                  |
| Material      | BOOL            | Materiel                              | Non nul                            | `True`                                  |

Table Exercise
| Champ         | Type de Données | Description                           | Contrainte                         | Exemple                                 |
|---------------|-----------------|---------------------------------------|------------------------------------|-----------------------------------------|
| ID            | ID              | Identifiant de lexercice              |     Clé primaire                               | `1`                                     |
| Name          | VARCHAR         | Nom                                | Non nul                            | `Prise de Masse`                        |
| Repetition    | INT             | Repetition                            | Non nul                            | `5`                                  |
| Serie         | INT             | Serie                                 | Non nul                            | `5`                                  |
| TimeOff       | FLAOT           | Temps de repos                        | Non nul                            | `60`                                  |


Table Masse Corporelle
| Champ        | Type de Données | Description                             | Contrainte                         | Exemple                                 |
|--------------|-----------------|-----------------------------------------|------------------------------------|-----------------------------------------|
| ID           | ID              | Identifiant                             | CClé primaire       | `1`   |
| Weight       | VARCHAR         | poids                                   | Non nul                            | `78`                                 |
| Size         | VARCHAR         | Taille                                  | Non nul                            | `180`                               |
| Date         | DATE            | date                                    |   Non nul                                 | `2024-02-02 00:00:00`                              |
| BirthDate    | DATETIME        | Date de naissance                       |   Non nul                                 | `1975-05-15 00:00:00`                   |




