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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryId` int NOT NULL,
  `userId` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `priceUnit` enum('đồng/m2/tháng','đồng/tháng','','') COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `acreage` float NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `status` enum('active','hidden','expired','unpaid') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'unpaid',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_category` (`categoryId`),
  KEY `fk_post_user` (`userId`),
  CONSTRAINT `fk_post_category` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_post_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (42,1,2,'Cho thuê phòng trọ giá rẻ co sinh viên và người lao động','cho-thue-phong-tro-gia-re-co-sinh-vien-va-nguoi-lao-dong',900000,'đồng/tháng',4,'<p>Cho thuê phòng trọ giá rẻ co sinh viên và người lao động</p>','active','2025-08-26 05:03:15','2025-08-26 18:47:27'),(43,2,2,'Cho thuê nhà nguyên căn giá hợp lý vcc','cho-thue-nha-nguyen-can-gia-hop-ly-vcc',20000000,'đồng/tháng',17,'<p>Cho thuê nhà nguyên căn giá hợp lý vcc</p>','active','2025-08-27 02:32:36','2025-08-27 03:34:09'),(62,2,2,'http://localhost:5173/quan-ly/tin-dang/tao-moi-bai-dang','httplocalhost5173quan-lytin-dangtao-moi-bai-dang',100000,'đồng/tháng',9,'<p>http://localhost:5173/quan-ly/tin-dang/tao-moi-bai-dang</p>','active','2025-08-27 07:00:08','2025-09-02 02:55:25'),(63,4,1,'CHo thue phòng trọ tại Bà ria vũng tàu','cho-thue-phong-tro-tai-ba-ria-vung-tau',10000,'đồng/tháng',1,'<p>CHo thue phòng trọ tại Bà ria vũng tàu</p>','unpaid','2025-08-27 18:59:17','2025-08-27 18:59:17'),(64,5,1,'CHo thue phòng trọ tại Bà ria vũng tàu','cho-thue-phong-tro-tai-ba-ria-vung-tau',10000,'đồng/tháng',1,'<p>CHo thue phòng trọ tại Bà ria vũng tàu</p>','unpaid','2025-08-27 18:59:24','2025-08-27 19:12:49'),(65,5,2,'Cho thuê căn hộ dịch vụ','cho-thue-can-ho-dich-vu',10000000,'đồng/tháng',40,'<p>Cho thuê căn hộ dịch vụ</p>','active','2025-08-28 19:56:25','2025-09-02 02:54:59');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
