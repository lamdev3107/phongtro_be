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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `publicId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `imageURL` text COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_image_post` (`postId`),
  CONSTRAINT `fk_image_post` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,42,'PhongTro123/ngv2relai2muwln18dmy','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184592/PhongTro123/ngv2relai2muwln18dmy.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(2,42,'PhongTro123/dcrwbi8cvpxixlqoplau','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184592/PhongTro123/dcrwbi8cvpxixlqoplau.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(3,42,'PhongTro123/ixdvkzotjd4e5d5phhw0','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184591/PhongTro123/ixdvkzotjd4e5d5phhw0.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(4,42,'PhongTro123/xbszynyqavckpbddylff','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184593/PhongTro123/xbszynyqavckpbddylff.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(5,42,'PhongTro123/bjqzxjfi1h61hexqlo9j','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184594/PhongTro123/bjqzxjfi1h61hexqlo9j.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(6,42,'PhongTro123/hgxqusjzwmqdc3ufjb9d','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756184593/PhongTro123/hgxqusjzwmqdc3ufjb9d.jpg','2025-08-26 05:03:15','2025-08-26 05:03:15'),(7,43,'PhongTro123/ix42upbhszvadfggcqx4','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261949/PhongTro123/ix42upbhszvadfggcqx4.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36'),(8,43,'PhongTro123/szckd2d8dcq7uk8csrwm','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261947/PhongTro123/szckd2d8dcq7uk8csrwm.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36'),(9,43,'PhongTro123/s51krt9gpolenqysvuos','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261953/PhongTro123/s51krt9gpolenqysvuos.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36'),(10,43,'PhongTro123/y0yuqeuko4szr3ranv5w','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261950/PhongTro123/y0yuqeuko4szr3ranv5w.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36'),(11,43,'PhongTro123/mja22xq6d7okoqfdjr1r','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261954/PhongTro123/mja22xq6d7okoqfdjr1r.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36'),(12,43,'PhongTro123/yl4099rpo4vz2iufts4o','https://res.cloudinary.com/dwqmjrxgz/image/upload/v1756261953/PhongTro123/yl4099rpo4vz2iufts4o.jpg','2025-08-27 02:32:36','2025-08-27 02:32:36');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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
