-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: datatable
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
-- Table structure for table `prestations`
--

DROP TABLE IF EXISTS `prestations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prestation` varchar(255) DEFAULT NULL,
  `chantier` varchar(255) DEFAULT NULL,
  `janv` float DEFAULT '0',
  `fev` float DEFAULT '0',
  `mars` float DEFAULT '0',
  `avril` float DEFAULT '0',
  `mai` float DEFAULT '0',
  `juin` float DEFAULT '0',
  `juil` float DEFAULT '0',
  `aout` float DEFAULT '0',
  `sept` float DEFAULT '0',
  `oct` float DEFAULT '0',
  `nov` float DEFAULT '0',
  `dec` float DEFAULT '0',
  KEY `id` (`id`),
  KEY `prestation` (`prestation`),
  KEY `chantier` (`chantier`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestations`
--

LOCK TABLES `prestations` WRITE;
/*!40000 ALTER TABLE `prestations` DISABLE KEYS */;
INSERT INTO `prestations` VALUES (24,'Vitrerie','ADOMOS (ADM0101)',2,0,3,0,2,0,0,2,0,2,6,0),(25,'Remise en état mensuelle','ADOMOS (ADM0101)',2,0,3,88,2,0,0,2,0,2,6,0),(29,'Remise en état mensuelle','AM PRODUCTION (AMP0301)',0,0,0,19,0,18.5,0,19,0,0,19.6,0),(30,'Remise en état mensuelle','AM PRODUCTION (AMP0301)',0.1,0,0,0,0.3,0,0,0,0,0.5,0,0);
/*!40000 ALTER TABLE `prestations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-24  1:05:31
