-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 09, 2018 at 08:05 PM
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

CREATE TABLE `Carrera` (
  `idCarrera` int(11) NOT NULL,
  `idEscuela` int(11) NOT NULL,
  `NombreCarrera` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CarrerasPorSede`
--

CREATE TABLE `CarrerasPorSede` (
  `idCarrera` int(11) NOT NULL,
  `idSede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CatalogoEvento`
--

CREATE TABLE `CatalogoEvento` (
  `idTipoEvento` int(11) NOT NULL,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CatalogoGenero`
--

CREATE TABLE `CatalogoGenero` (
  `idGenero` int(11) NOT NULL,
  `Genero` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CoordinadorPractica`
--

CREATE TABLE `CoordinadorPractica` (
  `Cedula` int(11) NOT NULL,
  `idCarrera` int(11) NOT NULL,
  `idSede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DireccionCorreoElectronico`
--

CREATE TABLE `DireccionCorreoElectronico` (
  `idCorreoElectronico` int(11) NOT NULL,
  `CorreoElectronico` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Documento`
--

CREATE TABLE `Documento` (
  `NombreDocumento` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dueno` int(11) NOT NULL,
  `FechaModificacion` datetime NOT NULL,
  `idDocumento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EmpresasPorCarreraYSede`
--

CREATE TABLE `EmpresasPorCarreraYSede` (
  `Sede` int(11) NOT NULL,
  `Carrera` int(11) NOT NULL,
  `CedulaJuridicaEmpresa` int(11) NOT NULL,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Escuela`
--

CREATE TABLE `Escuela` (
  `IdEscuela` int(11) NOT NULL,
  `IdUniversidad` int(11) NOT NULL,
  `NombreEscuela` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EstadoEmpresa`
--

CREATE TABLE `EstadoEmpresa` (
  `idEstado` int(11) NOT NULL,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EstadoEstudiante`
--

CREATE TABLE `EstadoEstudiante` (
  `idEstado` int(11) NOT NULL,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EstadoFormularioCharla`
--

CREATE TABLE `EstadoFormularioCharla` (
  `idEstado` int(11) NOT NULL,
  `Estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Estudiante`
--

CREATE TABLE `Estudiante` (
  `Cedula` int(11) NOT NULL,
  `Universidad` int(11) NOT NULL,
  `Escuela` int(11) NOT NULL,
  `Sede` int(11) NOT NULL,
  `Carrera` int(11) NOT NULL,
  `Carne` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Evaluacion`
--

CREATE TABLE `Evaluacion` (
  `CedulaEvaluador` int(11) NOT NULL,
  `CedulaEvaluado` int(11) NOT NULL,
  `JSONEvaluacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `TipoEvaluacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Evento`
--

CREATE TABLE `Evento` (
  `idEvento` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `HoraInicio` time NOT NULL,
  `HoraFin` time NOT NULL,
  `TipoEvento` int(11) NOT NULL,
  `Foto` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `FormularioCharla`
--

CREATE TABLE `FormularioCharla` (
  `CedulaJuridica` int(11) NOT NULL,
  `idEvento` int(11) NOT NULL,
  `NombreCharla` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Dia` date NOT NULL,
  `Hora` time NOT NULL,
  `Expositor` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `idFormularioCharla` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `NumeroTelefono`
--

CREATE TABLE `NumeroTelefono` (
  `idTelefono` int(11) NOT NULL,
  `Telefono` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Persona`
--

CREATE TABLE `Persona` (
  `Cedula` int(11) NOT NULL,
  `Nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SegundoNombre` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Apellido` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SegundoApellido` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Genero` int(11) NOT NULL,
  `TipoPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Sede`
--

CREATE TABLE `Sede` (
  `idSede` int(11) NOT NULL,
  `idUniversidad` int(11) NOT NULL,
  `NombreSede` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Direccion` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Semestre`
--

CREATE TABLE `Semestre` (
  `IdSemestre` int(11) NOT NULL,
  `Ano` int(11) NOT NULL,
  `NumeroSemestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TipoEvaluacion`
--

CREATE TABLE `TipoEvaluacion` (
  `idEvaluacion` int(11) NOT NULL,
  `TipoEvaluacion` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `TipoPersona`
--

CREATE TABLE `TipoPersona` (
  `IdTipo` int(11) NOT NULL,
  `Tipo` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmpresaAsociada` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Universidad`
--

CREATE TABLE `Universidad` (
  `idUniversidad` int(11) NOT NULL,
  `NombreUniversidad` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

CREATE TABLE `Usuario` (
  `Cedula` int(11) NOT NULL,
  `NombreUsuario` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Contrasena` char(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Carrera`
--
ALTER TABLE `Carrera`
  ADD PRIMARY KEY (`idCarrera`),
  ADD KEY `FK_ID_ESCUELA` (`idEscuela`);

--
-- Indexes for table `CarrerasPorSede`
--
ALTER TABLE `CarrerasPorSede`
  ADD PRIMARY KEY (`idCarrera`,`idSede`),
  ADD KEY `FK_ID_SEDE` (`idSede`);

--
-- Indexes for table `CatalogoEvento`
--
ALTER TABLE `CatalogoEvento`
  ADD PRIMARY KEY (`idTipoEvento`);

--
-- Indexes for table `CatalogoGenero`
--
ALTER TABLE `CatalogoGenero`
  ADD PRIMARY KEY (`idGenero`);

--
-- Indexes for table `CoordinadorPractica`
--
ALTER TABLE `CoordinadorPractica`
  ADD PRIMARY KEY (`Cedula`),
  ADD KEY `FK_CARRERA` (`idCarrera`),
  ADD KEY `FK_SEDE` (`idSede`);

--
-- Indexes for table `DireccionCorreoElectronico`
--
ALTER TABLE `DireccionCorreoElectronico`
  ADD PRIMARY KEY (`idCorreoElectronico`),
  ADD KEY `FK_CEDULA_PERSONA` (`idPersona`);

--
-- Indexes for table `Documento`
--
ALTER TABLE `Documento`
  ADD PRIMARY KEY (`idDocumento`),
  ADD KEY `FK_DUENO_DOCUMENTO` (`Dueno`);

--
-- Indexes for table `EmpresasPorCarreraYSede`
--
ALTER TABLE `EmpresasPorCarreraYSede`
  ADD PRIMARY KEY (`Sede`,`Carrera`,`CedulaJuridicaEmpresa`),
  ADD KEY `FK_EPCS_EMPRESA` (`CedulaJuridicaEmpresa`),
  ADD KEY `FK_EPCS_CARRERA` (`Carrera`);

--
-- Indexes for table `Escuela`
--
ALTER TABLE `Escuela`
  ADD PRIMARY KEY (`IdEscuela`),
  ADD KEY `FK_ESCUELA_UNIVERSIDAD` (`IdUniversidad`);

--
-- Indexes for table `EstadoEmpresa`
--
ALTER TABLE `EstadoEmpresa`
  ADD PRIMARY KEY (`idEstado`);

--
-- Indexes for table `EstadoEstudiante`
--
ALTER TABLE `EstadoEstudiante`
  ADD PRIMARY KEY (`idEstado`);

--
-- Indexes for table `EstadoFormularioCharla`
--
ALTER TABLE `EstadoFormularioCharla`
  ADD PRIMARY KEY (`idEstado`);

--
-- Indexes for table `Estudiante`
--
ALTER TABLE `Estudiante`
  ADD PRIMARY KEY (`Cedula`),
  ADD KEY `FK_ESTUDIANTE_UNIVERSIDAD` (`Universidad`),
  ADD KEY `FK_ESTUDIANTE_ESCUELA` (`Escuela`),
  ADD KEY `FK_ESTUDIANTE_SEDE` (`Sede`),
  ADD KEY `FK_ESTUDIANTE_CARRERA` (`Carrera`),
  ADD KEY `FK_ESTUDIANTE_ESTADO` (`Estado`),
  ADD KEY `FK_ESTUDIANTE_SEMESTRE` (`Semestre`);

--
-- Indexes for table `Evaluacion`
--
ALTER TABLE `Evaluacion`
  ADD PRIMARY KEY (`CedulaEvaluador`),
  ADD KEY `FK_EVALUACION_CEDULA_EVALUADO` (`CedulaEvaluado`),
  ADD KEY `FK_EVALUACION_TIPO` (`TipoEvaluacion`);

--
-- Indexes for table `Evento`
--
ALTER TABLE `Evento`
  ADD PRIMARY KEY (`idEvento`),
  ADD KEY `FK_EVENTO_TIPO` (`TipoEvento`);

--
-- Indexes for table `FormularioCharla`
--
ALTER TABLE `FormularioCharla`
  ADD PRIMARY KEY (`idFormularioCharla`),
  ADD KEY `FK_FORMULARIO_CHARLA_CED_JUR` (`CedulaJuridica`),
  ADD KEY `FK_FORMULARIO_CHARLA_EVENTO` (`idEvento`),
  ADD KEY `FK_FORMULARIO_CHARLA_EXPOSITOR` (`Expositor`),
  ADD KEY `FK_FORMULARIO_CHARLA_ESTADO` (`Estado`);

--
-- Indexes for table `NumeroTelefono`
--
ALTER TABLE `NumeroTelefono`
  ADD PRIMARY KEY (`idTelefono`);

--
-- Indexes for table `Persona`
--
ALTER TABLE `Persona`
  ADD PRIMARY KEY (`Cedula`),
  ADD KEY `FK_PERSONA_TIPO_PERSONA` (`TipoPersona`),
  ADD KEY `FK_PERSONA_GENERO` (`Genero`);

--
-- Indexes for table `Sede`
--
ALTER TABLE `Sede`
  ADD PRIMARY KEY (`idSede`),
  ADD KEY `FK_SEDE_UNIVERSIDAD` (`idUniversidad`);

--
-- Indexes for table `Semestre`
--
ALTER TABLE `Semestre`
  ADD PRIMARY KEY (`IdSemestre`);

--
-- Indexes for table `TipoEvaluacion`
--
ALTER TABLE `TipoEvaluacion`
  ADD PRIMARY KEY (`idEvaluacion`);

--
-- Indexes for table `TipoPersona`
--
ALTER TABLE `TipoPersona`
  ADD PRIMARY KEY (`IdTipo`),
  ADD KEY `FK_TIPO_PERSONA_EMPRESA_ASOCIADA` (`EmpresaAsociada`);

--
-- Indexes for table `Universidad`
--
ALTER TABLE `Universidad`
  ADD PRIMARY KEY (`idUniversidad`);

--
-- Indexes for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`Cedula`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Carrera`
--
ALTER TABLE `Carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CatalogoEvento`
--
ALTER TABLE `CatalogoEvento`
  MODIFY `idTipoEvento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `CatalogoGenero`
--
ALTER TABLE `CatalogoGenero`
  MODIFY `idGenero` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `DireccionCorreoElectronico`
--
ALTER TABLE `DireccionCorreoElectronico`
  MODIFY `idCorreoElectronico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Documento`
--
ALTER TABLE `Documento`
  MODIFY `idDocumento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Escuela`
--
ALTER TABLE `Escuela`
  MODIFY `IdEscuela` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `EstadoEmpresa`
--
ALTER TABLE `EstadoEmpresa`
  MODIFY `idEstado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `EstadoEstudiante`
--
ALTER TABLE `EstadoEstudiante`
  MODIFY `idEstado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `EstadoFormularioCharla`
--
ALTER TABLE `EstadoFormularioCharla`
  MODIFY `idEstado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Estudiante`
--
ALTER TABLE `Estudiante`
  MODIFY `Cedula` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `FormularioCharla`
--
ALTER TABLE `FormularioCharla`
  MODIFY `idFormularioCharla` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `NumeroTelefono`
--
ALTER TABLE `NumeroTelefono`
  MODIFY `idTelefono` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Sede`
--
ALTER TABLE `Sede`
  MODIFY `idSede` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Semestre`
--
ALTER TABLE `Semestre`
  MODIFY `IdSemestre` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TipoEvaluacion`
--
ALTER TABLE `TipoEvaluacion`
  MODIFY `idEvaluacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TipoPersona`
--
ALTER TABLE `TipoPersona`
  MODIFY `IdTipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Universidad`
--
ALTER TABLE `Universidad`
  MODIFY `idUniversidad` int(11) NOT NULL AUTO_INCREMENT;

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
