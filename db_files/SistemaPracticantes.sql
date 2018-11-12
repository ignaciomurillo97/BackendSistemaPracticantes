-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 12, 2018 at 09:01 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SistemaPracticantes`
--

-- --------------------------------------------------------

--
-- Table structure for table `Carrera`
--

CREATE TABLE `Carrera` (
  `idCarrera` int(11) NOT NULL,
  `idEscuela` int(11) NOT NULL,
  `NombreCarrera` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Carrera`
--

INSERT INTO `Carrera` (`idCarrera`, `idEscuela`, `NombreCarrera`) VALUES
(1, 1, 'Ingenieria en Computacion');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Carrera`
--
ALTER TABLE `Carrera`
  ADD PRIMARY KEY (`idCarrera`),
  ADD UNIQUE KEY `NombreCarrera` (`NombreCarrera`),
  ADD KEY `FK_ID_ESCUELA` (`idEscuela`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Carrera`
--
ALTER TABLE `Carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Carrera`
--
ALTER TABLE `Carrera`
  ADD CONSTRAINT `FK_ID_ESCUELA` FOREIGN KEY (`idEscuela`) REFERENCES `Escuela` (`IdEscuela`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
