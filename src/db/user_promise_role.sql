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

 Date: 26/08/2021 17:19:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_promise_role
-- ----------------------------
DROP TABLE IF EXISTS `user_promise_role`;
CREATE TABLE `user_promise_role` (
  `u_name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `u_path` varchar(255) DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `u_role` int DEFAULT NULL,
  `u_id` varchar(255) DEFAULT NULL,
  `file_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_promise_role
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
