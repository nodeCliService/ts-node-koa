/*
 Navicat Premium Data Transfer

 Source Server         : localMaTQ
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : app-user

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 26/08/2021 17:19:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_source_info
-- ----------------------------
DROP TABLE IF EXISTS `user_source_info`;
CREATE TABLE `user_source_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) DEFAULT NULL,
  `file_path_id` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `file_local_url` varchar(255) DEFAULT NULL,
  `file_status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `file_size` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_source_info
-- ----------------------------
BEGIN;
INSERT INTO `user_source_info` VALUES (1, '/a', '/A0000', 'Floder', 'a', NULL, '', '1', '2021-08-19 15:48:44', '2021-08-20 15:48:49', 0, NULL);
INSERT INTO `user_source_info` VALUES (2, '/b', '/B0000', 'Folder', 'b', NULL, NULL, '1', '2021-08-26 14:47:02', '2021-08-26 14:47:02', 0, NULL);
INSERT INTO `user_source_info` VALUES (3, '/b', '/B0000', 'Folder', 'b', NULL, NULL, '1', '2021-08-26 14:47:26', '2021-08-26 14:47:26', 0, NULL);
INSERT INTO `user_source_info` VALUES (4, '/a', '/A0000', 'Folder', 'a', NULL, NULL, '1', '2021-08-26 14:46:29', '2021-08-26 14:46:29', 0, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
