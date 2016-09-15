--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- Name: roles; Type: TYPE; Schema: public; Owner: Amin
--

CREATE TYPE roles AS ENUM (
    'Manager',
    'Employee'
);


ALTER TYPE roles OWNER TO "Amin";

--
-- Name: branches_seq; Type: SEQUENCE; Schema: public; Owner: Amin
--

CREATE SEQUENCE branches_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE branches_seq OWNER TO "Amin";

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: branches; Type: TABLE; Schema: public; Owner: Amin
--

CREATE TABLE branches (
    bid integer DEFAULT nextval('branches_seq'::regclass) NOT NULL,
    name character varying(40) NOT NULL
);


ALTER TABLE branches OWNER TO "Amin";

--
-- Name: employees_seq; Type: SEQUENCE; Schema: public; Owner: Amin
--

CREATE SEQUENCE employees_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE employees_seq OWNER TO "Amin";

--
-- Name: employees; Type: TABLE; Schema: public; Owner: Amin
--

CREATE TABLE employees (
    eid integer DEFAULT nextval('employees_seq'::regclass) NOT NULL,
    firstname character varying(40) NOT NULL,
    surname character varying(40) NOT NULL,
    rate money NOT NULL,
    role roles NOT NULL
);


ALTER TABLE employees OWNER TO "Amin";

--
-- Name: pwdresets; Type: TABLE; Schema: public; Owner: Amin
--

CREATE TABLE pwdresets (
    id character varying(256) NOT NULL,
    uid integer
);


ALTER TABLE pwdresets OWNER TO "Amin";

--
-- Name: users_seq; Type: SEQUENCE; Schema: public; Owner: Amin
--

CREATE SEQUENCE users_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_seq OWNER TO "Amin";

--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE users (
    uid integer DEFAULT nextval('users_seq'::regclass) NOT NULL,
    id character varying(60) NOT NULL,
    secret character varying(256)
);


ALTER TABLE users OWNER TO admin;

--
-- Name: worktime; Type: TABLE; Schema: public; Owner: Amin
--

CREATE TABLE worktime (
    wtid integer NOT NULL,
    eid integer NOT NULL,
    bid integer NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone
);


ALTER TABLE worktime OWNER TO "Amin";

--
-- Name: worktime_wtid_seq; Type: SEQUENCE; Schema: public; Owner: Amin
--

CREATE SEQUENCE worktime_wtid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE worktime_wtid_seq OWNER TO "Amin";

--
-- Name: worktime_wtid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Amin
--

ALTER SEQUENCE worktime_wtid_seq OWNED BY worktime.wtid;


--
-- Name: wtid; Type: DEFAULT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY worktime ALTER COLUMN wtid SET DEFAULT nextval('worktime_wtid_seq'::regclass);


--
-- Data for Name: branches; Type: TABLE DATA; Schema: public; Owner: Amin
--

COPY branches (bid, name) FROM stdin;
\.


--
-- Name: branches_seq; Type: SEQUENCE SET; Schema: public; Owner: Amin
--

SELECT pg_catalog.setval('branches_seq', 1, false);


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: Amin
--

COPY employees (eid, firstname, surname, rate, role) FROM stdin;
\.


--
-- Name: employees_seq; Type: SEQUENCE SET; Schema: public; Owner: Amin
--

SELECT pg_catalog.setval('employees_seq', 2, true);


--
-- Data for Name: pwdresets; Type: TABLE DATA; Schema: public; Owner: Amin
--

COPY pwdresets (id, uid) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY users (uid, id, secret) FROM stdin;
1	admin	\N
2	test@burgistats.com	$2a$10$omMpT1hKyXh5x.ArbHBWF.iqWpktbWkvPz48hv/Lggma505XCE/8y
5	sma.azar@gmail.com	$2a$10$PEjKkIKures9IAQeL0YC1OlSlGfLIg8.iWQiLX/zoUZTTWePW1qn6
\.


--
-- Name: users_seq; Type: SEQUENCE SET; Schema: public; Owner: Amin
--

SELECT pg_catalog.setval('users_seq', 5, true);


--
-- Data for Name: worktime; Type: TABLE DATA; Schema: public; Owner: Amin
--

COPY worktime (wtid, eid, bid, start_time, end_time) FROM stdin;
\.


--
-- Name: worktime_wtid_seq; Type: SEQUENCE SET; Schema: public; Owner: Amin
--

SELECT pg_catalog.setval('worktime_wtid_seq', 1, false);


--
-- Name: bkey; Type: CONSTRAINT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY branches
    ADD CONSTRAINT bkey PRIMARY KEY (bid);


--
-- Name: ekey; Type: CONSTRAINT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY employees
    ADD CONSTRAINT ekey PRIMARY KEY (eid);


--
-- Name: firstkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY users
    ADD CONSTRAINT firstkey PRIMARY KEY (uid);


--
-- Name: pwdreset_uid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY pwdresets
    ADD CONSTRAINT pwdreset_uid_fkey FOREIGN KEY (uid) REFERENCES users(uid);


--
-- Name: worktime_bid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY worktime
    ADD CONSTRAINT worktime_bid_fkey FOREIGN KEY (bid) REFERENCES branches(bid);


--
-- Name: worktime_eid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Amin
--

ALTER TABLE ONLY worktime
    ADD CONSTRAINT worktime_eid_fkey FOREIGN KEY (eid) REFERENCES employees(eid);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;
GRANT ALL ON SCHEMA public TO admin;


--
-- Name: users_seq; Type: ACL; Schema: public; Owner: Amin
--

REVOKE ALL ON SEQUENCE users_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE users_seq FROM "Amin";
GRANT ALL ON SEQUENCE users_seq TO "Amin";
GRANT ALL ON SEQUENCE users_seq TO admin;


--
-- Name: users; Type: ACL; Schema: public; Owner: admin
--

REVOKE ALL ON TABLE users FROM PUBLIC;
REVOKE ALL ON TABLE users FROM admin;
GRANT ALL ON TABLE users TO admin;


--
-- PostgreSQL database dump complete
--

