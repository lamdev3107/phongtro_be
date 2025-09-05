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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `header` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Phòng trọ','PT','Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất ','','2025-01-15 11:42:36','2025-01-15 11:42:36'),(2,'Nhà nguyên căn','NNC','Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất ','cho-thue-nha-nguyen-can','2025-01-15 11:42:36','2025-01-15 11:42:36'),(3,'Căn hộ chung cư','CHCC','Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất','cho-thue-can-ho-chung-cu','2025-01-15 11:42:36','2025-01-15 11:42:36'),(4,'Căn hộ mini','CHM','Cho Thuê Căn Hộ Mini + Chung Cư Mini Giá Rẻ, Mới Nhất','cho-thue-can-ho-chung-cu-mini','2025-01-15 11:42:36','2025-01-15 11:42:36'),(5,'Căn hộ dịch vụ','CHDV','Cho Thuê Căn Hộ Dịch Vụ, Giá Rẻ, Mới Nhất','cho-thue-can-ho-dich-vu','2025-01-15 11:42:36','2025-01-15 11:42:36'),(6,'Ở ghép','OG','Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất','tim-nguoi-o-ghep','2025-01-15 11:42:36','2025-01-15 11:42:36'),(7,'Mặt bằng','MB','Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất','cho-thue-mat-bang','2025-01-15 11:42:36','2025-01-15 11:42:36');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
