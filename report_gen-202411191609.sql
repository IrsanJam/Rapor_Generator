-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: report_gen
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB-ubu2404

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templates` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `style` text DEFAULT NULL,
  `jsx` text DEFAULT NULL,
  `json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `html` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES ('3ctktb45','Template 444','','<div>tidur</div>','{}','<!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n          <meta charset=\"UTF-8\">\n          <title>Generated Template</title>\n          <script src=\"https://cdn.tailwindcss.com\"></script>\n          <style>\n          \n          </style>\n      </head>\n      <body class=\"bg-gray-50\">\n          <div id=\"root\"></div>\n          <!-- Include React and ReactDOM -->\n          <script crossorigin src=\"https://unpkg.com/react@17/umd/react.development.js\"></script>\n          <script crossorigin src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"></script>\n          <!-- Include Babel -->\n          <script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>\n          <script type=\"text/babel\">\n          const data = {};\n          const App = () => (\n              <div>tidur</div>\n          );\n          ReactDOM.render(<App />, document.getElementById(\'root\'));\n          </script>\n      </body>\n      </html>\n    ','2024-11-18 10:12:11','2024-11-18 10:12:24'),('ce5mgtk7','Template 177','','<div>halo {data.name} </div>','{\"name\":\"aish\"}','<!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n          <meta charset=\"UTF-8\">\n          <title>Generated Template</title>\n          <script src=\"https://cdn.tailwindcss.com\"></script>\n          <style>\n          \n          </style>\n      </head>\n      <body class=\"bg-gray-50\">\n          <div id=\"root\"></div>\n          <!-- Include React and ReactDOM -->\n          <script crossorigin src=\"https://unpkg.com/react@17/umd/react.development.js\"></script>\n          <script crossorigin src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"></script>\n          <!-- Include Babel -->\n          <script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>\n          <script type=\"text/babel\">\n          const data = {\"name\":\"aish\"};\n          const App = () => (\n              <div>halo {data.name} </div>\n          );\n          ReactDOM.render(<App />, document.getElementById(\'root\'));\n          </script>\n      </body>\n      </html>\n    ','2024-11-19 04:32:50','2024-11-19 06:40:28'),('hf07x5sc','Template 853','/* Custom CSS - Only add styles not available in Tailwind */\n      .custom-gradient {\n        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      }\n\n      .custom-animation {\n        animation: fadeIn 0.3s ease-in;\n      }\n\n      @keyframes fadeIn {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }','<div className=\"container mx-auto p-4\">\n        <div className=\"max-w-4xl mx-auto\">\n          <h1 className=\"text-3xl font-bold text-gray-800 mb-4\">{data.title}</h1>\n          <p className=\"text-gray-600 mb-8\">{data.description}</p>\n          \n          <div className=\"grid gap-4\">\n            {data.items.map(item => (\n              <div key={item.id} className=\"bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow\">\n                <h2 className=\"text-xl font-semibold text-gray-700 mb-2\">{item.name}</h2>\n                <p className=\"text-gray-600\">{item.description}</p>\n                {item.price && (\n                  <div className=\"mt-4 flex items-center justify-between\">\n                    <span className=\"text-2xl font-bold text-blue-600\">{item.price}</span>\n                    <button className=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\">\n                      View Details\n                    </button>\n                  </div>\n                )}\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>','{\"title\":\"Featured Products\",\"description\":\"Check out our latest collection of premium items.\",\"items\":[{\"id\":1,\"name\":\"Premium Package\",\"description\":\"High-quality product with premium features\",\"price\":99.99},{\"id\":2,\"name\":\"Standard Package\",\"description\":\"Great value for everyday use\",\"price\":49.99},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98}]}','<!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n          <meta charset=\"UTF-8\">\n          <title>Generated Template</title>\n          <script src=\"https://cdn.tailwindcss.com\"></script>\n          <style>\n          /* Custom CSS - Only add styles not available in Tailwind */\n      .custom-gradient {\n        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      }\n\n      .custom-animation {\n        animation: fadeIn 0.3s ease-in;\n      }\n\n      @keyframes fadeIn {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n          </style>\n      </head>\n      <body class=\"bg-gray-50\">\n          <div id=\"root\"></div>\n          <!-- Include React and ReactDOM -->\n          <script crossorigin src=\"https://unpkg.com/react@17/umd/react.development.js\"></script>\n          <script crossorigin src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"></script>\n          <!-- Include Babel -->\n          <script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>\n          <script type=\"text/babel\">\n          const data = {\"title\":\"Featured Products\",\"description\":\"Check out our latest collection of premium items.\",\"items\":[{\"id\":1,\"name\":\"Premium Package\",\"description\":\"High-quality product with premium features\",\"price\":99.99},{\"id\":2,\"name\":\"Standard Package\",\"description\":\"Great value for everyday use\",\"price\":49.99},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98},{\"id\":3,\"name\":\"Somay\",\"description\":\"Oh coool\",\"price\":94949494994949.98}]};\n          const App = () => (\n              <div className=\"container mx-auto p-4\">\n        <div className=\"max-w-4xl mx-auto\">\n          <h1 className=\"text-3xl font-bold text-gray-800 mb-4\">{data.title}</h1>\n          <p className=\"text-gray-600 mb-8\">{data.description}</p>\n          \n          <div className=\"grid gap-4\">\n            {data.items.map(item => (\n              <div key={item.id} className=\"bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow\">\n                <h2 className=\"text-xl font-semibold text-gray-700 mb-2\">{item.name}</h2>\n                <p className=\"text-gray-600\">{item.description}</p>\n                {item.price && (\n                  <div className=\"mt-4 flex items-center justify-between\">\n                    <span className=\"text-2xl font-bold text-blue-600\">{item.price}</span>\n                    <button className=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\">\n                      View Details\n                    </button>\n                  </div>\n                )}\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>\n          );\n          ReactDOM.render(<App />, document.getElementById(\'root\'));\n          </script>\n      </body>\n      </html>\n    ','2024-11-18 07:02:22','2024-11-19 07:33:25');
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (112,'irsan','10Maret2000','irsan@gmail.com'),(113,'irsan','$2b$10$tQnyCqp/7ypE1kA42FHTJuJd.aQLCOIhXp9n1Y8MvXyYREmhJaMvm','admin@gmail.com'),(114,'sirsan','$2b$10$kimAxrz5tpPZ4hJ6Pj/x4.X7YjZuncoWnubaCcVcBQ0EQAwrBuG6G','admin@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'report_gen'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-19 16:09:42
