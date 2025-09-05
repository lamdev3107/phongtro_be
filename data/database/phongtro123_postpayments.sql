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
-- Table structure for table `postpayments`
--

DROP TABLE IF EXISTS `postpayments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postpayments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `postPackageId` int DEFAULT NULL,
  `userId` int NOT NULL,
  `duration` int DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `expiredDate` datetime DEFAULT NULL,
  `totalPrice` int DEFAULT NULL,
  `status` enum('paid','unpaid') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'unpaid',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_postpayment_post` (`postId`),
  KEY `fk_postpayment_user` (`userId`),
  KEY `fk_postpayment_postpackage` (`postPackageId`),
  CONSTRAINT `fk_postpayment_post` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_postpayment_postpackage` FOREIGN KEY (`postPackageId`) REFERENCES `postpackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postpayments`
--

LOCK TABLES `postpayments` WRITE;
/*!40000 ALTER TABLE `postpayments` DISABLE KEYS */;
INSERT INTO `postpayments` VALUES (1,42,18,2,7,'2025-08-26 18:47:23','2025-09-02 18:47:23',133000,'paid','2025-08-26 18:47:26','2025-08-26 18:47:26'),(2,43,11,2,7,'2025-08-27 02:38:07','2025-09-03 02:38:07',12000,'paid','2025-08-27 02:38:07','2025-08-27 02:38:07'),(34,62,11,2,7,'2025-08-27 07:26:24','2025-09-03 07:26:24',12000,'paid','2025-08-27 07:26:25','2025-08-27 07:26:25'),(35,65,21,2,7,'2025-08-28 19:59:10','2025-09-04 19:59:10',190000,'paid','2025-08-28 19:59:10','2025-08-28 19:59:10'),(36,62,24,2,7,'2025-09-02 02:55:25','2025-09-09 02:55:25',315000,'paid','2025-09-02 02:55:25','2025-09-02 02:55:25');
/*!40000 ALTER TABLE `postpayments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-05 13:31:22
