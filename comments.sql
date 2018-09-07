-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 07 2018 г., 21:47
-- Версия сервера: 5.6.37
-- Версия PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `honey-db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `username`, `email`, `comment`) VALUES
(1, 'test', 'foo@bar.com', 'test'),
(2, 'test', 'foo@bar.com', 'test'),
(3, 'test', 'foo@bar.com', 'test'),
(4, 'test', 'foo@bar.com', 'test'),
(5, 'test', 'foo@bar.com', 'test'),
(6, 'test', 'foo@bar.com', 'test'),
(7, 'test', 'foo@bar.com', 'test'),
(8, 'test', 'foo@bar.com', 'test'),
(9, 'test', 'foo@bar.com', 'test'),
(10, 'test', 'foo@bar.com', 'test'),
(11, 'test', 'foo@bar.com', 'test'),
(12, 'test', 'foo@bar.com', 'test'),
(13, 'test', 'foo@bar.com', 'test'),
(14, 'test', 'foo@bar.com', 'test'),
(15, 'test', 'foo@bar.com', 'test'),
(16, 'test', 'foo@bar.com', 'test');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
