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
-- Table structure for table `provinces`
--

DROP TABLE IF EXISTS `provinces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provinces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AVG_ROW_LENGTH=260 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces`
--

LOCK TABLES `provinces` WRITE;
/*!40000 ALTER TABLE `provinces` DISABLE KEYS */;
INSERT INTO `provinces` VALUES (1,'HANOI','Hà Nội'),(2,'HAGIANG','Hà Giang'),(4,'CAOBANG','Cao Bằng'),(6,'BACKAN','Bắc Kạn'),(8,'TUYENQUANG','Tuyên Quang'),(10,'LAOCAI','Lào Cai'),(11,'DIENBIEN','Điện Biên'),(12,'LAICHAU','Lai Châu'),(14,'SONLA','Sơn La'),(15,'YENBAI','Yên Bái'),(17,'HOABINH','Hoà Bình'),(19,'THAINGUYEN','Thái Nguyên'),(20,'LANGSON','Lạng Sơn'),(22,'QUANGNINH','Quảng Ninh'),(24,'BACGIANG','Bắc Giang'),(25,'PHUTHO','Phú Thọ'),(26,'VINHPHUC','Vĩnh Phúc'),(27,'BACNINH','Bắc Ninh'),(30,'HAIDUONG','Hải Dương'),(31,'HAIPHONG','Hải Phòng'),(33,'HUNGYEN','Hưng Yên'),(34,'THAIBINH','Thái Bình'),(35,'HANAM','Hà Nam'),(36,'NAMDINH','Nam Định'),(37,'NINHBINH','Ninh Bình'),(38,'THANHHOA','Thanh Hóa'),(40,'NGHEAN','Nghệ An'),(42,'HATINH','Hà Tĩnh'),(44,'QUANGBINH','Quảng Bình'),(45,'QUANGTRI','Quảng Trị'),(46,'THUATHIENHUE','Thừa Thiên Huế'),(48,'DANANG','Đà Nẵng'),(49,'QUANGNAM','Quảng Nam'),(51,'QUANGNGAI','Quảng Ngãi'),(52,'BINHDINH','Bình Định'),(54,'PHUYEN','Phú Yên'),(56,'KHANHHOA','Khánh Hòa'),(58,'NINHTHUAN','Ninh Thuận'),(60,'BINHTHUAN','Bình Thuận'),(62,'KONTUM','Kon Tum'),(64,'GIALAI','Gia Lai'),(66,'DAKLAK','Đắk Lắk'),(67,'DAKNONG','Đắk Nông'),(68,'LAMDONG','Lâm Đồng'),(70,'BINHPHUOC','Bình Phước'),(72,'TAYNINH','Tây Ninh'),(74,'BINHDUONG','Bình Dương'),(75,'DONGNAI','Đồng Nai'),(77,'BARIAVUNGTAU','Bà Rịa - Vũng Tàu'),(79,'HOCHIMINH','Hồ Chí Minh'),(80,'LONGAN','Long An'),(82,'TIENGIANG','Tiền Giang'),(83,'BENTRE','Bến Tre'),(84,'TRAVINH','Trà Vinh'),(86,'VINHLONG','Vĩnh Long'),(87,'DONGTHAP','Đồng Tháp'),(89,'ANGIANG','An Giang'),(91,'KIENGIANG','Kiên Giang'),(92,'CANTHO','Cần Thơ'),(93,'HAUGIANG','Hậu Giang'),(94,'SOCTRANG','Sóc Trăng'),(95,'BACLIEU','Bạc Liêu'),(96,'CAMAU','Cà Mau');
/*!40000 ALTER TABLE `provinces` ENABLE KEYS */;
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
