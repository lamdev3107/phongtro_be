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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `province` int NOT NULL,
  `district` int NOT NULL,
  `ward` int NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `addressString` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_post` (`postId`),
  KEY `fk_address_province_idx` (`province`),
  KEY `fk_address_district_idx` (`district`),
  KEY `fk_address_ward_idx` (`ward`),
  CONSTRAINT `fk_address_district` FOREIGN KEY (`district`) REFERENCES `districts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_address_post` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_address_province` FOREIGN KEY (`province`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_address_ward` FOREIGN KEY (`ward`) REFERENCES `wards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,42,79,760,26737,'','Phường Đa Kao, Quận 1,  Hồ Chí Minh','2025-08-26 05:03:15','2025-09-02 12:24:10'),(2,43,1,272,9781,'48 Ngõ 13, Khuất Duy Tiến','48 Ngõ 13, Khuất Duy Tiến, Xã Liên Hiệp,Huyện Phúc Thọ,Tỉnh Hà Nội','2025-08-27 02:32:36','2025-08-27 02:32:36'),(10,62,6,64,2035,'','Xã Bản Thi,Huyện Chợ Đồn,Tỉnh Bắc Kạn','2025-08-27 07:00:08','2025-08-27 07:00:08'),(11,63,77,750,26574,'','Xã Bàu Chinh,Huyện Châu Đức,Tỉnh Bà Rịa - Vũng Tàu','2025-08-27 18:59:17','2025-08-27 18:59:17'),(12,64,77,750,26574,'','Xã Bàu Chinh,Huyện Châu Đức,Tỉnh Bà Rịa - Vũng Tàu','2025-08-27 18:59:24','2025-08-27 18:59:24'),(13,65,24,218,7480,'Ngõ 182, đường Hoàng Văn Thụ','Ngõ 182, đường Hoàng Văn Thụ, Xã Chu Điện,Huyện Lục Nam,Tỉnh Bắc Giang','2025-08-28 19:56:25','2025-08-28 19:56:25');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
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
