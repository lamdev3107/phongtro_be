-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2025 at 09:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phongtro123`
--

-- --------------------------------------------------------

--
-- Table structure for table `Addresses`
--

CREATE TABLE `Addresses` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `province` int(11) DEFAULT NULL,
  `district` int(11) NOT NULL,
  `ward` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `addressString` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Addresses`
--

INSERT INTO `Addresses` (`id`, `postId`, `province`, `district`, `ward`, `address`, `addressString`, `createdAt`, `updatedAt`) VALUES
(43, 38, 89, 886, 30341, '', 'Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang', '2025-08-13 19:52:23', '2025-08-15 06:59:12'),
(44, 39, 89, 886, 30337, '\"48 Ngõ 13, Khuất Duy Tiến\"', '48 Ngõ 13, Khuất Duy Tiến, Thị trấn An Phú,Huyện An Phú,Tỉnh An Giang', '2025-08-13 19:59:32', '2025-08-13 19:59:32'),
(45, 40, 89, 886, 30341, '\"\"', 'Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang', '2025-08-15 03:53:25', '2025-08-15 03:53:25'),
(46, 41, 77, 755, 0, '', 'Huyện Côn Đảo,Tỉnh Bà Rịa - Vũng Tàu', '2025-08-15 06:55:26', '2025-08-15 06:55:26');

-- --------------------------------------------------------

--
-- Table structure for table `Attributes`
--

CREATE TABLE `Attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Attributes`
--

INSERT INTO `Attributes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(23, 'Đầy đủ nội thất', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(24, 'Có máy lạnh', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(25, 'Có thang máy', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(26, 'Có bảo vệ 24/24', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(27, 'Có gác', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(28, 'Có máy giặt', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(29, 'Không chung chủ', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(30, 'Có hầm để xe', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(31, 'Có kệ bếp', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(32, 'Có tủ lạnh', '2025-01-18 05:43:20', '2025-01-18 05:43:20'),
(33, 'Giờ giấc tự do', '2025-01-18 05:43:20', '2025-01-18 05:43:20');

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `header` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`id`, `name`, `code`, `header`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 'Phòng trọ', 'PT', 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất ', 'cho-thue-phong-tro', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(2, 'Nhà nguyên căn', 'NNC', 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất ', 'cho-thue-nha-nguyen-can', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(3, 'Căn hộ chung cư', 'CHCC', 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất', 'cho-thue-can-ho-chung-cu', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(4, 'Căn hộ mini', 'CHM', 'Cho Thuê Căn Hộ Mini + Chung Cư Mini Giá Rẻ, Mới Nhất', 'cho-thue-can-ho-chung-cu-mini', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(5, 'Căn hộ dịch vụ', 'CHDV', 'Cho Thuê Căn Hộ Dịch Vụ, Giá Rẻ, Mới Nhất', 'cho-thue-can-ho-dich-vu', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(6, 'Ở ghép', 'OG', 'Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất', 'tim-nguoi-o-ghep', '2025-01-15 11:42:36', '2025-01-15 11:42:36'),
(7, 'Mặt bằng', 'MB', 'Cho Thuê Mặt Bằng, Cho Thuê Văn Phòng, Cửa Hàng, Kiot, Mới Nhất', 'cho-thue-mat-bang', '2025-01-15 11:42:36', '2025-01-15 11:42:36');

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `publicId` varchar(255) NOT NULL,
  `imageURL` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id`, `postId`, `publicId`, `imageURL`, `createdAt`, `updatedAt`) VALUES
(64, 38, 'PhongTro123/pacfpi8i4fzhjchy2c8y', 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1755114741/PhongTro123/pacfpi8i4fzhjchy2c8y.png', '2025-08-13', '2025-08-13'),
(65, 38, 'PhongTro123/clyyngwmmsi7h1ffqqka', 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1755114741/PhongTro123/clyyngwmmsi7h1ffqqka.png', '2025-08-13', '2025-08-13'),
(88, 39, 'PhongTro123/cowumkgoqmhvk8ebhowf', 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1755240727/PhongTro123/cowumkgoqmhvk8ebhowf.jpg', '2025-08-15', '2025-08-15'),
(89, 41, 'PhongTro123/xc5vdenfg1hprarttlko', 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1755240927/PhongTro123/xc5vdenfg1hprarttlko.jpg', '2025-08-15', '2025-08-15');

-- --------------------------------------------------------

--
-- Table structure for table `PostAttributes`
--

CREATE TABLE `PostAttributes` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `attributeId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PostAttributes`
--

INSERT INTO `PostAttributes` (`id`, `postId`, `attributeId`, `createdAt`, `updatedAt`) VALUES
(108, 38, 23, '2025-08-13 19:52:23', '2025-08-13 19:52:23'),
(109, 38, 26, '2025-08-13 19:52:23', '2025-08-13 19:52:23'),
(168, 39, 23, '2025-08-15 06:52:07', '2025-08-15 06:52:07'),
(169, 39, 26, '2025-08-15 06:52:07', '2025-08-15 06:52:07'),
(170, 39, 29, '2025-08-15 06:52:07', '2025-08-15 06:52:07'),
(171, 41, 30, '2025-08-15 06:55:26', '2025-08-15 06:55:26'),
(172, 41, 33, '2025-08-15 06:55:26', '2025-08-15 06:55:26'),
(173, 40, 23, '2025-08-15 06:59:12', '2025-08-15 06:59:12'),
(174, 40, 26, '2025-08-15 06:59:12', '2025-08-15 06:59:12');

-- --------------------------------------------------------

--
-- Table structure for table `Postpackages`
--

CREATE TABLE `Postpackages` (
  `id` int(11) NOT NULL,
  `postTypeId` int(11) NOT NULL,
  `timePackageId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Postpackages`
--

INSERT INTO `Postpackages` (`id`, `postTypeId`, `timePackageId`, `price`, `createdAt`, `updatedAt`) VALUES
(7, 1, 1, 0, '2025-02-25 18:27:12', '2025-02-25 18:27:12'),
(8, 1, 2, 0, '2025-02-25 20:51:28', '2025-02-25 20:51:28'),
(9, 1, 3, 0, '2025-02-25 20:51:50', '2025-02-25 20:51:50'),
(10, 14, 1, 2000, '2025-01-27 19:03:53', '2025-01-27 19:24:39'),
(11, 14, 2, 12000, '2025-01-27 19:27:29', '2025-01-27 19:27:29'),
(12, 14, 3, 60000, '2025-01-27 19:27:51', '2025-01-28 11:08:22'),
(13, 15, 1, 10000, '2025-01-27 19:28:05', '2025-01-27 19:28:05'),
(14, 15, 2, 63000, '2025-01-27 19:28:19', '2025-01-27 19:28:19'),
(15, 15, 3, 240000, '2025-01-27 19:28:44', '2025-01-27 19:28:44'),
(16, 16, 1, 20000, '2025-01-27 19:29:03', '2025-01-27 19:29:03'),
(18, 16, 2, 133000, '2025-01-27 19:30:32', '2025-01-27 19:30:32'),
(19, 16, 3, 540000, '2025-01-27 19:30:48', '2025-01-27 19:30:48'),
(20, 17, 1, 30000, '2025-01-27 19:31:00', '2025-01-27 19:31:00'),
(21, 17, 2, 190000, '2025-01-27 19:31:31', '2025-01-27 19:31:31'),
(22, 17, 3, 800000, '2025-01-27 19:31:48', '2025-01-27 19:31:48'),
(23, 18, 1, 50000, '2025-01-27 19:32:01', '2025-01-27 19:32:01'),
(24, 18, 2, 315000, '2025-01-27 19:32:41', '2025-01-27 19:32:41'),
(25, 18, 3, 1200000, '2025-01-27 19:33:04', '2025-01-27 19:33:04');

-- --------------------------------------------------------

--
-- Table structure for table `Postpayments`
--

CREATE TABLE `Postpayments` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `postPackageId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `duration` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `expiredDate` datetime DEFAULT NULL,
  `totalPrice` int(11) DEFAULT NULL,
  `status` enum('paid','unpaid') NOT NULL DEFAULT 'unpaid',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `priceUnit` enum('đồng/m2/tháng','đồng/tháng','','') NOT NULL DEFAULT '',
  `acreage` float NOT NULL,
  `description` text DEFAULT NULL,
  `status` enum('active','hidden','expired','unpaid') NOT NULL DEFAULT 'unpaid',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `categoryId`, `userId`, `title`, `slug`, `price`, `priceUnit`, `acreage`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(38, 1, 2, 'Địa chỉ: Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang', 'dia-chi-thi-tran-long-binhhuyen-an-phutinh-an-giang', 10000, 'đồng/tháng', 1, '<p><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.145 0 0);\">Địa chỉ:Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang</span></p>', 'unpaid', '2025-08-13 19:52:23', '2025-08-13 19:52:23'),
(39, 2, 2, '48 Ngõ 13, Khuất Duy Tiến, Thị trấn An Phú,Huyện An Phú,Tỉnh An Giang', '48-ngo-13-khuat-duy-tien-thi-tran-an-phuhuyen-an-phutinh-an-giang', 1000000, 'đồng/tháng', 46, '<p><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.145 0 0);\">48 Ngõ 13, Khuất Duy Tiến, Thị trấn An Phú,Huyện An Phú,Tỉnh An Giang</span></p>', 'unpaid', '2025-08-13 19:59:32', '2025-08-15 06:52:07'),
(40, 1, 2, 'Địa chỉ: Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang', 'dia-chi-thi-tran-long-binhhuyen-an-phutinh-an-giang', 10000, 'đồng/tháng', 1, '<p><span style=\"color: oklch(0.145 0 0); background-color: rgb(255, 255, 255);\">Địa chỉ:Thị Trấn Long Bình,Huyện An Phú,Tỉnh An Giang</span></p>', 'unpaid', '2025-08-15 03:53:25', '2025-08-15 06:59:12'),
(41, 2, 2, 'Địa chỉ:Huyện Côn Đảo,Tỉnh Bà Rịa - Vũng Tàu', 'dia-chihuyen-con-daotinh-ba-ria-vung-tau', 1000000, 'đồng/tháng', 7, '<p><span style=\"background-color: rgb(255, 255, 255); color: oklch(0.145 0 0);\">Địa chỉ:Huyện Côn Đảo,Tỉnh Bà Rịa - Vũng Tàu</span></p>', 'unpaid', '2025-08-15 06:55:26', '2025-08-15 06:55:26');

-- --------------------------------------------------------

--
-- Table structure for table `Posttypes`
--

CREATE TABLE `Posttypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `Postsize` varchar(100) NOT NULL,
  `colorName` varchar(100) NOT NULL,
  `color` varchar(255) NOT NULL,
  `uppercase` tinyint(1) NOT NULL,
  `autoConfirm` tinyint(1) DEFAULT 1,
  `imageDemo` varchar(255) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Posttypes`
--

INSERT INTO `Posttypes` (`id`, `name`, `Postsize`, `colorName`, `color`, `uppercase`, `autoConfirm`, `imageDemo`, `star`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Tin miễn phí', 'Nhỏ', 'Màu mặc định', '#055698', 0, 0, 'null', 0, '<p><span style=\"background-color:rgb(255,255,255);color:hsl(207,94%,31%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Tiêu đề màu mặc định, viết thường</span><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">.</span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"> Hiển thị sau các tin VIP.</span></span></p>', '2025-02-25 18:23:45', '2025-02-25 21:21:13'),
(14, 'Tin thường', 'Nhỏ', 'Màu mặc định', '#055698', 0, 0, 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1737970255/PhongTro123/y9toqnk2aqvz7hs1ki8q.jpg', 0, '<p><span style=\"background-color:rgb(255,255,255);color:hsl(207, 94%, 31%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Tiêu đề màu mặc định, viết thường</span><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">.</span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"> Hiển thị sau các tin VIP.</span></span></p>', '2025-01-27 09:30:56', '2025-02-25 21:17:04'),
(15, 'Tin VIP 3', 'Trung bình', 'Màu xanh', '#3763e0', 1, 1, 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1737970458/PhongTro123/xlh9ac8kjgi9npacqir3.jpg', 2, '<p><span style=\"background-color:rgb(255,255,255);color:hsl(224, 73%, 55%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>TIÊU ĐỀ IN HOA MÀU XANH</strong></span><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">, </span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">gắn biểu tượng 2 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP Nổi Bật, Tin VIP 1, Tin VIP 2 và trên các tin khác.</span></span></p>', '2025-01-27 09:34:19', '2025-01-27 09:39:48'),
(16, 'Tin VIP 2', 'Trung bình', 'Màu cam', '#ff6600', 1, 1, 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1737970533/PhongTro123/opdc0t4hsfmblw8wubcv.jpg', 3, '<p><span style=\"background-color:rgb(255,255,255);color:hsl(24, 100%, 50%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>TIÊU ĐỀ IN HOA MÀU CAM</strong></span><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">,</span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"> gắn biểu tượng 3 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP Nổi Bật, Tin VIP 1 và trên các tin khác.</span></span></p>', '2025-01-27 09:35:36', '2025-01-27 09:35:36'),
(17, 'Tin VIP 1', 'Lớn', 'Màu Hồng', '#de178c', 1, 1, 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1737970599/PhongTro123/pcueo9xve6zlgg8bpdoy.jpg', 4, '<p><span style=\"background-color:rgb(255,255,255);color:hsl(325, 81%, 48%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>TIÊU ĐỀ IN HOA MÀU HỒNG</strong></span><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">,</span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"> gắn biểu tượng 4 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP Nổi Bật và trên các tin khác.</span></span></p>', '2025-01-27 09:36:39', '2025-01-27 09:36:39'),
(18, 'Tin VIP Nổi Bật', 'Rất lớn', 'Màu đỏ', '#e41b23', 1, 1, 'https://res.cloudinary.com/dwqmjrxgz/image/upload/v1737970733/PhongTro123/ahxvigbd0jm1whbgdjit.jpg', 5, '<p class=\"fs-5-5 fw-light\" style=\"-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:1.1rem;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300 !important;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><span style=\"background-color:rgb(255,255,255);color:hsl(358, 79%, 50%);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;box-sizing:border-box;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;letter-spacing:normal;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><strong>TIÊU ĐỀ IN HOA MÀU ĐỎ</strong></span></span><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">, gắn biểu tượng 5 ngôi sao màu vàng và hiển thị to và nhiều hình hơn các tin khác. Nằm trên tất cả các tin khác, được hưởng nhiều ưu tiên và hiệu quả giao dịch cao nhất.</span></span></p><p class=\"fs-5-5 fw-light\" style=\"-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);box-sizing:border-box;color:rgb(33, 37, 41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:1.1rem;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300 !important;letter-spacing:normal;margin-bottom:1rem;margin-top:0px;orphans:2;scroll-behavior:auto !important;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\"><span style=\"background-color:rgb(255,255,255);color:rgb(33,37,41);font-family:system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Noto Sans&quot;, &quot;Liberation Sans&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:15.4px;\"><span style=\"-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:300;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;\">Đồng thời xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó</span></span></p>', '2025-01-27 09:38:53', '2025-01-27 09:38:53');

-- --------------------------------------------------------

--
-- Table structure for table `Reports`
--

CREATE TABLE `Reports` (
  `id` int(11) NOT NULL,
  `postId` int(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `moreDescription` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Sequelizemeta`
--

CREATE TABLE `Sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Sequelizemeta`
--

INSERT INTO `Sequelizemeta` (`name`) VALUES
('20250218175334-create_Users.js'),
('create-address.js'),
('create-attribute.js'),
('create-category.js'),
('create-image.js'),
('create-post-attribute.js'),
('create-post-package.js'),
('create-post-payment.js'),
('create-post-type.js'),
('create-post.js'),
('create-report.js'),
('create-token.js'),
('create-Users.js'),
('create-wishlist.js');

-- --------------------------------------------------------

--
-- Table structure for table `Timepackages`
--

CREATE TABLE `Timepackages` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dayCount` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Timepackages`
--

INSERT INTO `Timepackages` (`id`, `name`, `dayCount`, `createdAt`, `updatedAt`) VALUES
(1, 'Đăng theo ngày', 1, '2025-01-22', '2025-01-22'),
(2, 'Đăng theo tuần', 7, '2025-01-22', '2025-01-22'),
(3, 'Đăng theo tháng', 30, '2025-01-22', '2025-01-22');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `zalo` varchar(255) DEFAULT NULL,
  `fbUrl` varchar(255) DEFAULT NULL,
  `avatar` text DEFAULT NULL,
  `verified` tinyint(1) DEFAULT NULL,
  `passwordResetExpireDate` datetime DEFAULT NULL,
  `passwordResetToken` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `otpExpireTime` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `password`, `role`, `phone`, `email`, `zalo`, `fbUrl`, `avatar`, `verified`, `passwordResetExpireDate`, `passwordResetToken`, `otp`, `otpExpireTime`, `createdAt`, `updatedAt`) VALUES
(1, 'Trần Xuân Lâm', '$2a$12$SwduiHeDyAt5p8k0DMGrz.bUCUsCYXn.7IkRtxbFTJ/j1.4nNOfXm', 'user', '0973534773', 'lamtx.3107@gmail.com', NULL, NULL, NULL, 1, NULL, 'f94ef5818a57d81345fc0353d6c85afb248466db842e00f1c5999b1e0e7b77bd', '444751', '2025-08-12 03:45:47', '2025-08-12 03:18:17', '2025-08-12 07:22:12'),
(2, 'Trần Xuân Lâm', '$2a$12$mxcsIuyftKy5yYt.Zht5Teio1cFipGk/S6DSI9C0TeDXGN68x6QFC', 'user', '0973534773', 'lamdev.3107@gmail.com', NULL, NULL, NULL, 1, NULL, NULL, '399105', '2025-08-12 03:52:50', '2025-08-12 03:42:32', '2025-08-12 07:30:15');

-- --------------------------------------------------------

--
-- Table structure for table `Wishlists`
--

CREATE TABLE `Wishlists` (
  `id` int(11) NOT NULL,
  `userId` int(255) NOT NULL,
  `postId` int(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Addresses`
--
ALTER TABLE `Addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_address_post` (`postId`);

--
-- Indexes for table `Attributes`
--
ALTER TABLE `Attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_image_post` (`postId`);

--
-- Indexes for table `PostAttributes`
--
ALTER TABLE `PostAttributes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_postattribute_attribute` (`attributeId`),
  ADD KEY `fk_postattribute_post` (`postId`);

--
-- Indexes for table `Postpackages`
--
ALTER TABLE `Postpackages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_postpackage_posttype` (`postTypeId`),
  ADD KEY `fk_postpackage_timepackage` (`timePackageId`) USING BTREE;

--
-- Indexes for table `Postpayments`
--
ALTER TABLE `Postpayments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_postpayment_post` (`postId`),
  ADD KEY `fk_postpayment_user` (`userId`),
  ADD KEY `fk_postpayment_postpackage` (`postPackageId`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_post_category` (`categoryId`),
  ADD KEY `fk_post_user` (`userId`);

--
-- Indexes for table `Posttypes`
--
ALTER TABLE `Posttypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Reports`
--
ALTER TABLE `Reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_report_post` (`postId`);

--
-- Indexes for table `Sequelizemeta`
--
ALTER TABLE `Sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Timepackages`
--
ALTER TABLE `Timepackages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Wishlists`
--
ALTER TABLE `Wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_wishlist_user` (`userId`),
  ADD KEY `fk_wishlist_post` (`postId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Addresses`
--
ALTER TABLE `Addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `Attributes`
--
ALTER TABLE `Attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `PostAttributes`
--
ALTER TABLE `PostAttributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `Postpackages`
--
ALTER TABLE `Postpackages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `Postpayments`
--
ALTER TABLE `Postpayments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `Posttypes`
--
ALTER TABLE `Posttypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Reports`
--
ALTER TABLE `Reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Timepackages`
--
ALTER TABLE `Timepackages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Wishlists`
--
ALTER TABLE `Wishlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Addresses`
--
ALTER TABLE `Addresses`
  ADD CONSTRAINT `fk_address_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Images`
--
ALTER TABLE `Images`
  ADD CONSTRAINT `fk_image_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PostAttributes`
--
ALTER TABLE `PostAttributes`
  ADD CONSTRAINT `fk_postattribute_attribute` FOREIGN KEY (`attributeId`) REFERENCES `Attributes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_postattribute_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Postpackages`
--
ALTER TABLE `Postpackages`
  ADD CONSTRAINT `fk_postpackage_posttype` FOREIGN KEY (`postTypeId`) REFERENCES `Posttypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_postpackage_timepackage` FOREIGN KEY (`timePackageId`) REFERENCES `Timepackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Postpayments`
--
ALTER TABLE `Postpayments`
  ADD CONSTRAINT `fk_postpayment_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_postpayment_postpackage` FOREIGN KEY (`postPackageId`) REFERENCES `Postpackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `fk_post_category` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_post_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Reports`
--
ALTER TABLE `Reports`
  ADD CONSTRAINT `fk_report_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Wishlists`
--
ALTER TABLE `Wishlists`
  ADD CONSTRAINT `fk_wishlist_post` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_wishlist_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
