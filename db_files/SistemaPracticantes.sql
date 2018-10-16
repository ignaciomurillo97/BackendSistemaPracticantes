-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 15, 2018 at 05:46 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

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

CREATE TABLE IF NOT EXISTS `Carrera` (
  `idCarrera` int(11) NOT NULL AUTO_INCREMENT,
  `idEscuela` int(11) NOT NULL,
  `NombreCarrera` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCarrera`),
  KEY `FK_ID_ESCUELA` (`idEscuela`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Carrera`
--

INSERT INTO `Carrera` (`idCarrera`, `idEscuela`, `NombreCarrera`) VALUES
(1, 1, 'Ingenieria en Computacion');

-- --------------------------------------------------------

--
-- Table structure for table `CarrerasPorSede`
--

CREATE TABLE IF NOT EXISTS `CarrerasPorSede` (
  `idCarrera` int(11) NOT NULL,
  `idSede` int(11) NOT NULL,
  PRIMARY KEY (`idCarrera`,`idSede`),
  KEY `FK_ID_SEDE` (`idSede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CatalogoEvento`
--

CREATE TABLE IF NOT EXISTS `CatalogoEvento` (
  `idTipoEvento` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idTipoEvento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CatalogoGenero`
--

CREATE TABLE IF NOT EXISTS `CatalogoGenero` (
  `idGenero` int(11) NOT NULL AUTO_INCREMENT,
  `Genero` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idGenero`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CatalogoGenero`
--

INSERT INTO `CatalogoGenero` (`idGenero`, `Genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Table structure for table `CoordinadorPractica`
--

CREATE TABLE IF NOT EXISTS `CoordinadorPractica` (
  `Cedula` int(11) NOT NULL,
  `idCarrera` int(11) NOT NULL,
  `idSede` int(11) NOT NULL,
  PRIMARY KEY (`Cedula`),
  KEY `FK_CARRERA` (`idCarrera`),
  KEY `FK_SEDE` (`idSede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DireccionCorreoElectronico`
--

CREATE TABLE IF NOT EXISTS `DireccionCorreoElectronico` (
  `idCorreoElectronico` int(11) NOT NULL AUTO_INCREMENT,
  `CorreoElectronico` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPersona` int(11) NOT NULL,
  PRIMARY KEY (`idCorreoElectronico`),
  KEY `FK_CEDULA_PERSONA` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `DireccionCorreoElectronico`
--

INSERT INTO `DireccionCorreoElectronico` (`idCorreoElectronico`, `CorreoElectronico`, `idPersona`) VALUES
(24, 'correo1@servidor.com', 123443210),
(25, 'correo2@servidor.com', 123443210),
(26, 'correo3@servidor.com', 123443210),
(27, 'correo4@servidor.com', 123443210);

-- --------------------------------------------------------

--
-- Table structure for table `Documento`
--

CREATE TABLE IF NOT EXISTS `Documento` (
  `NombreDocumento` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dueno` int(11) NOT NULL,
  `FechaModificacion` datetime NOT NULL,
  `idDocumento` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idDocumento`),
  KEY `FK_DUENO_DOCUMENTO` (`Dueno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EmpresasPorCarreraYSede`
--

CREATE TABLE IF NOT EXISTS `EmpresasPorCarreraYSede` (
  `Sede` int(11) NOT NULL,
  `Carrera` int(11) NOT NULL,
  `CedulaJuridicaEmpresa` int(11) NOT NULL,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Sede`,`Carrera`,`CedulaJuridicaEmpresa`),
  KEY `FK_EPCS_EMPRESA` (`CedulaJuridicaEmpresa`),
  KEY `FK_EPCS_CARRERA` (`Carrera`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Escuela`
--

CREATE TABLE IF NOT EXISTS `Escuela` (
  `IdEscuela` int(11) NOT NULL AUTO_INCREMENT,
  `IdUniversidad` int(11) NOT NULL,
  `NombreEscuela` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdEscuela`),
  KEY `FK_ESCUELA_UNIVERSIDAD` (`IdUniversidad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Escuela`
--

INSERT INTO `Escuela` (`IdEscuela`, `IdUniversidad`, `NombreEscuela`) VALUES
(1, 1, 'Ingenieria en Computacion');

-- --------------------------------------------------------

--
-- Table structure for table `EstadoEmpresa`
--

CREATE TABLE IF NOT EXISTS `EstadoEmpresa` (
  `idEstado` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EstadoEstudiante`
--

CREATE TABLE IF NOT EXISTS `EstadoEstudiante` (
  `idEstado` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `EstadoEstudiante`
--

INSERT INTO `EstadoEstudiante` (`idEstado`, `Estado`) VALUES
(1, 'Pendiente'),
(2, 'Aceptado'),
(3, 'En Practica');

-- --------------------------------------------------------

--
-- Table structure for table `EstadoFormularioCharla`
--

CREATE TABLE IF NOT EXISTS `EstadoFormularioCharla` (
  `idEstado` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Estudiante`
--

CREATE TABLE IF NOT EXISTS `Estudiante` (
  `Cedula` int(11) NOT NULL AUTO_INCREMENT,
  `Universidad` int(11) NOT NULL,
  `Escuela` int(11) NOT NULL,
  `Sede` int(11) NOT NULL,
  `Carrera` int(11) NOT NULL,
  `Carne` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Estado` int(11) NOT NULL,
  `Semestre` int(11) NOT NULL,
  PRIMARY KEY (`Cedula`),
  KEY `FK_ESTUDIANTE_UNIVERSIDAD` (`Universidad`),
  KEY `FK_ESTUDIANTE_ESCUELA` (`Escuela`),
  KEY `FK_ESTUDIANTE_SEDE` (`Sede`),
  KEY `FK_ESTUDIANTE_CARRERA` (`Carrera`),
  KEY `FK_ESTUDIANTE_ESTADO` (`Estado`),
  KEY `FK_ESTUDIANTE_SEMESTRE` (`Semestre`)
) ENGINE=InnoDB AUTO_INCREMENT=123443211 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Estudiante`
--

INSERT INTO `Estudiante` (`Cedula`, `Universidad`, `Escuela`, `Sede`, `Carrera`, `Carne`, `Estado`, `Semestre`) VALUES
(123443210, 1, 1, 2, 1, '2016000000', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Evaluacion`
--

CREATE TABLE IF NOT EXISTS `Evaluacion` (
  `CedulaEvaluador` int(11) NOT NULL,
  `CedulaEvaluado` int(11) NOT NULL,
  `JSONEvaluacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `TipoEvaluacion` int(11) NOT NULL,
  PRIMARY KEY (`CedulaEvaluador`),
  KEY `FK_EVALUACION_CEDULA_EVALUADO` (`CedulaEvaluado`),
  KEY `FK_EVALUACION_TIPO` (`TipoEvaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Evento`
--

CREATE TABLE IF NOT EXISTS `Evento` (
  `idEvento` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `HoraInicio` time NOT NULL,
  `HoraFin` time NOT NULL,
  `TipoEvento` int(11) NOT NULL,
  `Foto` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idEvento`),
  KEY `FK_EVENTO_TIPO` (`TipoEvento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `FormularioCharla`
--

CREATE TABLE IF NOT EXISTS `FormularioCharla` (
  `CedulaJuridica` int(11) NOT NULL,
  `idEvento` int(11) NOT NULL,
  `NombreCharla` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dia` date NOT NULL,
  `Hora` time NOT NULL,
  `Expositor` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `idFormularioCharla` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idFormularioCharla`),
  KEY `FK_FORMULARIO_CHARLA_CED_JUR` (`CedulaJuridica`),
  KEY `FK_FORMULARIO_CHARLA_EVENTO` (`idEvento`),
  KEY `FK_FORMULARIO_CHARLA_EXPOSITOR` (`Expositor`),
  KEY `FK_FORMULARIO_CHARLA_ESTADO` (`Estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `NumeroTelefono`
--

CREATE TABLE IF NOT EXISTS `NumeroTelefono` (
  `idTelefono` int(11) NOT NULL AUTO_INCREMENT,
  `Telefono` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPersona` int(11) NOT NULL,
  PRIMARY KEY (`idTelefono`),
  KEY `FK_TELEFONO_PERSONA` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `NumeroTelefono`
--

INSERT INTO `NumeroTelefono` (`idTelefono`, `Telefono`, `idPersona`) VALUES
(11, '88888888', 123443210),
(12, '99999999', 123443210);

-- --------------------------------------------------------

--
-- Table structure for table `Persona`
--

CREATE TABLE IF NOT EXISTS `Persona` (
  `Cedula` int(11) NOT NULL,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SegundoNombre` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Apellido` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SegundoApellido` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Genero` int(11) NOT NULL,
  `TipoPersona` int(11) NOT NULL,
  PRIMARY KEY (`Cedula`),
  KEY `FK_PERSONA_TIPO_PERSONA` (`TipoPersona`),
  KEY `FK_PERSONA_GENERO` (`Genero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Persona`
--

INSERT INTO `Persona` (`Cedula`, `Nombre`, `SegundoNombre`, `Apellido`, `SegundoApellido`, `Genero`, `TipoPersona`) VALUES
(43214321, 'Alvaro', NULL, 'Castro', NULL, 1, 4),
(123412341, 'Juanita', NULL, 'Perez', NULL, 2, 3),
(123443210, 'Juan', 'Paco', 'Pedro', 'de la Mar', 1, 1),
(123456789, 'Juan', NULL, 'Perez', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Sede`
--

CREATE TABLE IF NOT EXISTS `Sede` (
  `idSede` int(11) NOT NULL AUTO_INCREMENT,
  `idUniversidad` int(11) NOT NULL,
  `NombreSede` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Direccion` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idSede`),
  KEY `FK_SEDE_UNIVERSIDAD` (`idUniversidad`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Sede`
--

INSERT INTO `Sede` (`idSede`, `idUniversidad`, `NombreSede`, `Direccion`) VALUES
(1, 1, 'San Jose', 'Barrio Amon'),
(2, 1, 'Cartago', 'Cartago');

-- --------------------------------------------------------

--
-- Table structure for table `Semestre`
--

CREATE TABLE IF NOT EXISTS `Semestre` (
  `IdSemestre` int(11) NOT NULL AUTO_INCREMENT,
  `Ano` int(11) NOT NULL,
  `NumeroSemestre` int(11) NOT NULL,
  PRIMARY KEY (`IdSemestre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Semestre`
--

INSERT INTO `Semestre` (`IdSemestre`, `Ano`, `NumeroSemestre`) VALUES
(1, 2018, 2),
(2, 2019, 1),
(3, 2019, 2);

-- --------------------------------------------------------

--
-- Table structure for table `TipoEvaluacion`
--

CREATE TABLE IF NOT EXISTS `TipoEvaluacion` (
  `idEvaluacion` int(11) NOT NULL AUTO_INCREMENT,
  `TipoEvaluacion` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idEvaluacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TipoPersona`
--

CREATE TABLE IF NOT EXISTS `TipoPersona` (
  `IdTipo` int(11) NOT NULL AUTO_INCREMENT,
  `Tipo` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmpresaAsociada` int(11) DEFAULT NULL,
  `PaginaInicio` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdTipo`),
  KEY `FK_TIPO_PERSONA_EMPRESA_ASOCIADA` (`EmpresaAsociada`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `TipoPersona`
--

INSERT INTO `TipoPersona` (`IdTipo`, `Tipo`, `EmpresaAsociada`, `PaginaInicio`) VALUES
(1, 'Estudiante', NULL, 'localhost:4200/estudiante'),
(2, 'Empresa', NULL, 'localhost:4200/empresa'),
(3, 'Administrador', NULL, 'localhost:4200/administrador'),
(4, 'Coordinador', NULL, 'localhost:4200/coordinador');

-- --------------------------------------------------------

--
-- Table structure for table `Universidad`
--

CREATE TABLE IF NOT EXISTS `Universidad` (
  `idUniversidad` int(11) NOT NULL AUTO_INCREMENT,
  `NombreUniversidad` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idUniversidad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Universidad`
--

INSERT INTO `Universidad` (`idUniversidad`, `NombreUniversidad`) VALUES
(1, 'ITCR');

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE IF NOT EXISTS `Usuario` (
  `Cedula` int(11) NOT NULL,
  `NombreUsuario` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Contrasena` char(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Usuario`
--

INSERT INTO `Usuario` (`Cedula`, `NombreUsuario`, `Contrasena`) VALUES
(123443210, 'usuario', '$2b$10$RQMM1KYG8L0mXJ0V913Oze3EMB9BzO/z5d2I6DxV8uZ4zjuuShIla');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Carrera`
--
ALTER TABLE `Carrera`
  ADD CONSTRAINT `FK_ID_ESCUELA` FOREIGN KEY (`idEscuela`) REFERENCES `Escuela` (`IdEscuela`);

--
-- Constraints for table `CarrerasPorSede`
--
ALTER TABLE `CarrerasPorSede`
  ADD CONSTRAINT `FK_ID_CARRERA` FOREIGN KEY (`idCarrera`) REFERENCES `Carrera` (`idCarrera`),
  ADD CONSTRAINT `FK_ID_SEDE` FOREIGN KEY (`idSede`) REFERENCES `Sede` (`idSede`);

--
-- Constraints for table `CoordinadorPractica`
--
ALTER TABLE `CoordinadorPractica`
  ADD CONSTRAINT `FK_CARRERA` FOREIGN KEY (`idCarrera`) REFERENCES `Carrera` (`idCarrera`),
  ADD CONSTRAINT `FK_CEDULA` FOREIGN KEY (`Cedula`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_SEDE` FOREIGN KEY (`idSede`) REFERENCES `Sede` (`idSede`);

--
-- Constraints for table `DireccionCorreoElectronico`
--
ALTER TABLE `DireccionCorreoElectronico`
  ADD CONSTRAINT `FK_CEDULA_PERSONA` FOREIGN KEY (`idPersona`) REFERENCES `Persona` (`Cedula`);

--
-- Constraints for table `Documento`
--
ALTER TABLE `Documento`
  ADD CONSTRAINT `FK_DUENO_DOCUMENTO` FOREIGN KEY (`Dueno`) REFERENCES `CoordinadorPractica` (`Cedula`);

--
-- Constraints for table `EmpresasPorCarreraYSede`
--
ALTER TABLE `EmpresasPorCarreraYSede`
  ADD CONSTRAINT `FK_EPCS_CARRERA` FOREIGN KEY (`Carrera`) REFERENCES `Carrera` (`idCarrera`),
  ADD CONSTRAINT `FK_EPCS_EMPRESA` FOREIGN KEY (`CedulaJuridicaEmpresa`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_EPCS_SEDE` FOREIGN KEY (`Sede`) REFERENCES `Sede` (`idSede`);

--
-- Constraints for table `Escuela`
--
ALTER TABLE `Escuela`
  ADD CONSTRAINT `FK_ESCUELA_UNIVERSIDAD` FOREIGN KEY (`IdUniversidad`) REFERENCES `Universidad` (`idUniversidad`);

--
-- Constraints for table `Estudiante`
--
ALTER TABLE `Estudiante`
  ADD CONSTRAINT `FK_ESTUDIANTE_CARRERA` FOREIGN KEY (`Carrera`) REFERENCES `Carrera` (`idCarrera`),
  ADD CONSTRAINT `FK_ESTUDIANTE_CEDULA` FOREIGN KEY (`Cedula`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_ESTUDIANTE_ESCUELA` FOREIGN KEY (`Escuela`) REFERENCES `Escuela` (`IdEscuela`),
  ADD CONSTRAINT `FK_ESTUDIANTE_ESTADO` FOREIGN KEY (`Estado`) REFERENCES `EstadoEstudiante` (`idEstado`),
  ADD CONSTRAINT `FK_ESTUDIANTE_SEDE` FOREIGN KEY (`Sede`) REFERENCES `Sede` (`idSede`),
  ADD CONSTRAINT `FK_ESTUDIANTE_SEMESTRE` FOREIGN KEY (`Semestre`) REFERENCES `Semestre` (`IdSemestre`),
  ADD CONSTRAINT `FK_ESTUDIANTE_UNIVERSIDAD` FOREIGN KEY (`Universidad`) REFERENCES `Universidad` (`idUniversidad`);

--
-- Constraints for table `Evaluacion`
--
ALTER TABLE `Evaluacion`
  ADD CONSTRAINT `FK_EVALUACION_CEDULA_EVALUADO` FOREIGN KEY (`CedulaEvaluado`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_EVALUACION_CEDULA_EVALUADOR` FOREIGN KEY (`CedulaEvaluador`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_EVALUACION_TIPO` FOREIGN KEY (`TipoEvaluacion`) REFERENCES `TipoEvaluacion` (`idEvaluacion`);

--
-- Constraints for table `Evento`
--
ALTER TABLE `Evento`
  ADD CONSTRAINT `FK_EVENTO_TIPO` FOREIGN KEY (`TipoEvento`) REFERENCES `CatalogoEvento` (`idTipoEvento`);

--
-- Constraints for table `FormularioCharla`
--
ALTER TABLE `FormularioCharla`
  ADD CONSTRAINT `FK_FORMULARIO_CHARLA_CED_JUR` FOREIGN KEY (`CedulaJuridica`) REFERENCES `Persona` (`Cedula`),
  ADD CONSTRAINT `FK_FORMULARIO_CHARLA_ESTADO` FOREIGN KEY (`Estado`) REFERENCES `EstadoFormularioCharla` (`idEstado`),
  ADD CONSTRAINT `FK_FORMULARIO_CHARLA_EVENTO` FOREIGN KEY (`idEvento`) REFERENCES `Evento` (`idEvento`),
  ADD CONSTRAINT `FK_FORMULARIO_CHARLA_EXPOSITOR` FOREIGN KEY (`Expositor`) REFERENCES `Persona` (`Cedula`);

--
-- Constraints for table `NumeroTelefono`
--
ALTER TABLE `NumeroTelefono`
  ADD CONSTRAINT `FK_TELEFONO_PERSONA` FOREIGN KEY (`idPersona`) REFERENCES `Persona` (`Cedula`);

--
-- Constraints for table `Persona`
--
ALTER TABLE `Persona`
  ADD CONSTRAINT `FK_PERSONA_GENERO` FOREIGN KEY (`Genero`) REFERENCES `CatalogoGenero` (`idGenero`),
  ADD CONSTRAINT `FK_PERSONA_TIPO_PERSONA` FOREIGN KEY (`TipoPersona`) REFERENCES `TipoPersona` (`IdTipo`);

--
-- Constraints for table `Sede`
--
ALTER TABLE `Sede`
  ADD CONSTRAINT `FK_SEDE_UNIVERSIDAD` FOREIGN KEY (`idUniversidad`) REFERENCES `Universidad` (`idUniversidad`);

--
-- Constraints for table `TipoPersona`
--
ALTER TABLE `TipoPersona`
  ADD CONSTRAINT `FK_TIPO_PERSONA_EMPRESA_ASOCIADA` FOREIGN KEY (`EmpresaAsociada`) REFERENCES `Persona` (`Cedula`);

--
-- Constraints for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD CONSTRAINT `FK_USUARIO_CEDULA` FOREIGN KEY (`Cedula`) REFERENCES `Persona` (`Cedula`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
