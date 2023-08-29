"use client";
import React from "react";

import { usePathname, useRouter } from "next/navigation";

import { ListGroupItem, ListGroup } from "reactstrap";

function Taxonomy() {
  const router = useRouter();

  return (
    <>
      <h1 className="head-text-3 text-left">Trade instruments</h1>
      <ListGroup>
        <ListGroupItem
          className=" list-group-item-action active"
          onClick={(e) => e.preventDefault()}
          tag="a"
        >
          Unconditional Payment Undertaking
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="/create/taxonomy/upu/boe"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Bill Of Exchange
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Promisory Note
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Bankers Acceptance
        </ListGroupItem>
      </ListGroup>

      <h1 className="head-text-3 text-left">Documentary Credit</h1>

      <ListGroup>
        <ListGroupItem
          className=" list-group-item-action active"
          onClick={(e) => e.preventDefault()}
          tag="a"
        >
          Documentary Letters of Credit
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Revocable
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Irevocable
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Transferable
        </ListGroupItem>
      </ListGroup>

      <h1 className="head-text-3 text-left">Contingent Obligations</h1>

      <ListGroup>
        <ListGroupItem
          className=" list-group-item-action active"
          onClick={(e) => e.preventDefault()}
          tag="a"
        >
          Standby Letters of Credit
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Performance Bond
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Bid or Tender Bond
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Advance Payment Standby
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem
          className=" list-group-item-action active"
          onClick={(e) => e.preventDefault()}
          tag="a"
        >
          Demand Guaranties
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Performance
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Tender
        </ListGroupItem>
        <ListGroupItem
          className=" list-group-item-action"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
          tag="a"
        >
          Warranty
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default Taxonomy;
