-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: netheos
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` mediumtext,
  `answer` mediumtext,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `tag` (`tag`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (20,'Qu\'est-ce que l\'étiquette prépayée Colissimo ?','L’étiquette prépayée Colissimo vous permet d’envoyer facilement vos colis en France Métropolitaine (y compris la Corse) et Monaco jusqu’à 2 kg.  Vous achetez un carnet de 3 étiquettes sur notre site, en bureau de poste, chez un buraliste ou dans l’un des points de contact La Poste. Vous pourrez ensuite utiliser votre étiquette quand vous le voulez puisqu’elle a une validité permanente. Une fois votre colis prêt à l’envoi, il ne vous reste qu’à compléter les adresses expéditeur et destinataire dans les zones correspondantes, et à coller le tout sur votre paquet. Vous pouvez alors déposer votre colis dans un point de contact postal ou demander sa collecte par le facteur dans votre boîte aux lettres.','Envoyer un colis'),(21,'Quelles sont les dimensions autorisées pour les lettres et les Colissimo ?','Les dimensions et le poids autorisés pour votre envoi dépendent de sa nature (lettre ou colis), mais également de sa destination, de son mode d’expédition et de son mode de livraison.  Vers la Métropole Vers l\'Outre-Mer Vers l\'international Pour vos envois à destination de la France métropolitaine, d’Andorre et de Monaco  :  Catégories d\'envois  Dimensions minimales  Dimensions maximales  Poids maximal  Lettre ou carte    L = 14cm    l = 9cm    L + l + h = 100cm    avec une longueur maximale de 60cm    et une épaisseur maximale de 3 cm  3 kg  Colis    L = 22cm    l = 11cm    h = 1 cm    L + l + h = 150cm,    avec L max = 100cm (1)  Expédition depuis un point de contact postal : 30kg  Expédition depuis la boîte aux lettres : 5kg  Colis sous forme de rouleaux (avec supplément tarifaire)    L = 22 cm    Diamètre = 5 cm    L+2 x diamètre = 200cm  30 kg  (L : longueur, l : largeur, h : hauteur)','Envoyer un colis'),(22,'Comment emballer mon Colissimo ?','1. Choisissez bien votre emballage : un emballage adapté est le premier gage d’un colis livré dans les meilleures conditions. Un bon emballage, c’est un emballage :  De la bonne forme : elle doit se rapprocher autant que possible d’une boîte en carton standard : rectangulaire ou carrée. Vous pouvez utiliser un carton, un emballage en carton ou même, un ancien Colissimo (veillez bien dans ce cas à enlever toutes les étiquettes du précédent envoi). De la bonne taille : il doit être adapté au contenu de votre envoi, surtout si le contenu est fragile. Il doit aussi respecter les dimensions maximales autorisées par La Poste : la somme des trois dimensions de votre colis, la hauteur + la largeur + la longueur, ne doit pas dépasser 2 mètres. Solide : pour protéger votre envoi des manipulations, chocs et frottements, et assez rigide pour ne pas se déchirer pendant le transport. Stable : sa forme doit le rendre stable au moins sur une face et la liasse de transport doit pouvoir être apposée proprement sur une seule face.','Envoyer un colis'),(23,'Qu\'est-ce que la lettre simple en ligne ?','Avec notre gamme de courrier en ligne, vous déposez votre document ou vous le préparez sur notre site internet, vous saisissez les coordonnées de votre (vos) destinataire(s) et vous payez votre courrier en ligne.  Votre lettre est imprimée et mise sous enveloppe par La Poste, puis distribuée à destination par le facteur.','Envoyer un courrirer'),(24,'Qu\'est-ce que la lettre suivie en ligne ?','Avec notre gamme de courrier en ligne, vous déposez votre document ou vous le préparez sur notre site internet, vous saisissez les coordonnées de votre (vos) destinataire(s) et vous payez votre courrier en ligne.  Votre lettre est imprimée et mise sous enveloppe par La Poste, puis distribuée à destination par le facteur.     Parmi cette gamme, la lettre suivie en ligne est un courrier envoyé depuis notre site et distribué en boîte aux lettres, sur lequel vous bénéficiez de notre service de suivi. Celui-ci vous permet de savoir quand le courrier a été distribué.   Les délais d\'envoi et de réception sont les mêmes que pour une lettre \"classique\". Si votre commande a été effectuée avant 20h, votre courrier sera distribué dès le lendemain pour un envoi en France Métropolitaine.','Envoyer un courrirer'),(25,'Mes courriers et mes données envoyées en ligne sont-ils protégés par une clause de confidentialité ?','L\'impression et la mise sous enveloppe de vos courriers en ligne sont assurées par des machines, aucun traitement humain ne donne lieu à une éventuelle lecture de vos contenus.   En outre, La Poste s\'assure au quotidien du secret de vos correspondances et s\'engage à respecter et protéger la confidentialité des données qui lui sont remises par voie électronique.','Envoyer un courrirer'),(26,'Qu’est-ce qu’un envoi en Valeur Déclarée et en Smart Valeur Déclarée ?','La Smart Valeur Déclarée et la Valeur Déclarée sont des services sécurisés, adaptés aux envois de petits documents et petits objets de valeur, en France ou vers l’étranger.  Elles vous offrent toutes deux :  Sécurité : grâce à la preuve de dépôt, à la remise au destinataire contre signature et à un avis de réception (en option sur la Valeur Déclarée), Sérénité, avec le remboursement du montant déclaré lors du dépôt (jusqu’à 5 000 € pour la Valeur Déclarée et 750€ pour la Smart VD) en cas de perte ou avarie. Traçabilité : vous suivez l’acheminement de votre envoi 24 heures sur 24 et 7 jours sur 7. Les caractéristiques des 2 offres :   	 VALEUR DÉCLARÉE  SMART VALEUR DÉCLARÉE  Principe  Une enveloppe sécurisée agréée par La Poste (ou tout autre emballage dûment scellé),  que vous affranchissez selon le poids de votre envoi.  Un emballage « Prêt-à-Poster » tout-en-un, sécurisé et pré-timbré  Un courrier « connecté » et des services numériques en plus.  VOTRE ENVOI  Objets autorisés  Objets de valeur : pierres précieuses, bijoux, montres, pièces de collections, accessoires ou vêtements de marques, smartphones, etc. Documents : bons et chèques au porteur, tickets restaurants, chèques-vacances, chèques-cadeaux, etc. Objets interdits  Monnaie en cours d\'utilisation (pièces et billets), Métaux précieux (or ou argent), autres que sous forme de bijoux. En savoir plus sur le contenu. Attention : dans le cas d’un envoi en Valeur Déclarée Internationale, vous devez également vous référer aux spécificités du pays de destination. En savoir plus Poids maximum  5kg en France métropolitaine, Andorre, Monaco, vers les DOM-TOM et entre DOM. 2kg vers toute destination internationale 500g  Type d\'emballage  Enveloppe sécurisée agréée par La Poste  (divers formats disponibles, indéchirable et imperméable) ou tout autre emballage dûment scellé au dépôt.  Emballage 285x440cm, gonflable et protecteur avec une fermeture sécurisée et anti-fraude.  LES SERVICES  Destinations  France et international (sauf exception de pays n\'acceptant pas ce service)  France métropolitaine et Corse  Délai (indicatif)  J+2  J+2  Montant maximum garanti  5 000 €  750 €  Suivi en ligne  OUI  OUI  Preuve de dépôt  OUI, papier  OUI numérique (transmis au format PDF par mail et à consulter sur l’application)  Avis de réception  En option, papier  OUI numérique (transmis au format PDF par mail et à consulter sur l’application)  Remise contre signature  OUI  OUI, avec notification au destinataire pour choisir en amont la date de la livraison.  Contre-remboursement possible  OUI en France  NON  Achat  En ligne ou en Bureau de Poste  Validité  NON  Validité permanente tant que la Smart VD n’a pas été activée.','Envoyer un objet de valeur'),(27,'Que faire si je n’arrive pas à activer ma Smart Valeur Déclarée sur mobile ?','Il est possible que l\'activation de votre Smart Valeur Déclarée ne puisse aboutir si la version de l\'application qui est installée sur votre smartphone est trop ancienne. Dans ce cas, nous vous invitons à effectuer la mise à jour et à refaire l\'activation.  Vous pouvez également activer votre Smart Valeur Déclarée sur un automate en bureau de poste, où vous pourrez par la suite déposer votre envoi.  Si malgré ces démarches vous ne parvenez pas à activer votre Smart Valeur Déclarée, nous vous invitons à contacter notre Service Clients','Envoyer un objet de valeur'),(28,'Une tierce personne peut-elle récupérer mon Colissimo ou ma Lettre Recommandée dans un point de retrait ?','Recevoir un recommandé, aller chercher un colis au bureau de poste...pas toujours facile d\'être disponible !  Mais vous pouvez désigner une personne de confiance pour recevoir et/ou retirer vos envois à votre place.  Deux possibilités, selon votre besoin :  Pour un usage exceptionnel Pour un usage récurrent Vous voulez demander à une personne d\'aller retirer pour vous un colis ou un courrier arrivé en point de retrait ? Reportez-vous au verso de l\'avis de passage que votre facteur a déposé dans votre boîte aux lettres, ou au mail de mise à disposition en point de retrait, et complétez-y la zone prévue à cet effet. Confiez ce document à la personne désignée, ainsi que votre pièce d\'identité, et elle pourra récupérer votre objet en présentant aussi sa propre pièce d\'identité.','Donner procuration');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2b$10$9mIp41Vw2EFi8iGm7YhiYuqduRTf.l/waOj9aVJBrsNszUzJWL/ze','ADMIN');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-26 20:36:29
