import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Tableaux contenant les différents posts qui s'afficheront sur la page
  posts = [
    {
      title: 'Angular : la version 6.0.0 du framework JavaScript de Google est enfin disponible',
      content: "Attendue depuis le 4 avril conformément au calendrier annoncé par Google, la version 6.0.0 d'Angular est enfin disponible. Il s'agit d'une version majeure qui se concentre moins sur le framework sous-jacent, et plus sur la chaîne d'outils. L'équipe Angular a également profité pour synchroniser les versions majeures des packages du framework (@angular/core, @angular/common, @angular/compiler, etc.), de la CLI Angular et Angular Material/CDK. Tous ont été publiés sous la version 6.0.0 pour refléter la compatibilité entre ces différents composants de l'écosystème Angular.",
      loveIts: 0,
      hateIts: 0,
      created_at: new Date()
    },
    {
      title: 'Symfony 4.0 automatise l\'installation de paquets et la configuration',
      content: "SensioLabs a annoncé il y a quelques jours la sortie du Symfony 4.0.0, un ensemble de composants PHP ainsi qu'un framework écrit en PHP qui fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site Web. Le framework Symfony 4 est construit avec la dernière version de Symfony Components. Il s\'agit d\'un ensemble de bibliothèques PHP réutilisables qui devient une base standard pour la construction d\'applications PHP. Il faut noter qu\'il est possible d\'utiliser n\'importe lequel de ces composants dans vos propres applications indépendamment du framework Symfony.",
      loveIts: 0,
      hateIts: 0,
      created_at: new Date()
    },
    {
      title: 'Electron quesako ?',
      content: "Electron est un framework permettant de développer des applications multi-plateformes de bureau avec des technologies web (Javascript, HTML et CSS). L\'infrastructure (backend) est codée en node.js, et l\'interface (frontend) est bâtie sur la base des outils chromium, la partie open source de Google Chrome2. Electron est un logiciel libre open source développé par Github sous licence MIT. Electron a notamment permis de développer les éditeurs de texte libres Atom de Github et Visual Studio Code de Microsoft",
      loveIts: 0,
      hateIts: 0,
      created_at: new Date()
    }
  ]

}
