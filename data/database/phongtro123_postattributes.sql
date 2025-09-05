-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: phongtro123
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `postattributes`
--

DROP TABLE IF EXISTS `postattributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postattributes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `attributeId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_postattribute_attribute` (`attributeId`),
  KEY `fk_postattribute_post` (`postId`),
  CONSTRAINT `fk_postattribute_attribute` FOREIGN KEY (`attributeId`) REFERENCES `attributes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_postattribute_post` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postattributes`
--

LOCK TABLES `postattributes` WRITE;
/*!40000 ALTER TABLE `postattributes` DISABLE KEYS */;
INSERT INTO `postattributes` VALUES (175,42,29,'2025-08-26 05:03:15','2025-08-26 05:03:15'),(176,42,30,'2025-08-26 05:03:15','2025-08-26 05:03:15'),(177,42,27,'2025-08-26 05:03:15','2025-08-26 05:03:15'),(178,42,33,'2025-08-26 05:03:15','2025-08-26 05:03:15'),(179,43,23,'2025-08-27 02:32:36','2025-08-27 02:32:36'),(180,43,29,'2025-08-27 02:32:36','2025-08-27 02:32:36'),(181,43,27,'2025-08-27 02:32:36','2025-08-27 02:32:36'),(189,65,26,'2025-09-02 12:24:10','2025-09-02 12:24:10'),(190,65,29,'2025-09-02 12:24:10','2025-09-02 12:24:10');
/*!40000 ALTER TABLE `postattributes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-05 13:31:23
