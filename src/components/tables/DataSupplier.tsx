'use client'

import { useState } from "react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Input from "../form/input/InputField";
import Image from "next/image";
import clsx from "clsx";
import Button from "../ui/button/Button";
import Link from "next/link";
import { PencilIcon, CloseLineIcon } from "@/icons";

interface Order {
  id: number;
  nm_supplier: string;
  alamat: string;
  supplier: string;
  syarat_byr: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    nm_supplier: "PT ERA",
    alamat: "Jl.tegal tegal",
    supplier: "100",
    syarat_byr: "0",
  },
  {
    id: 2,
    nm_supplier: "PT.BERCA SPORTINDO",
    alamat: "JLN CIKINI RAYA JAKARTA",
    supplier: "102",
    syarat_byr: "60",
  },
  {
    id: 3,
    nm_supplier: "CV STAR WAY",
    alamat: "BANDUNG BANDUNG",
    supplier: "103",
    syarat_byr: "30",
  },
  {
    id: 4,
    nm_supplier: "SINAR JAYA",
    alamat: "JL IR. SOEKARNO NO 75 BLITAR",
    supplier: "110",
    syarat_byr: "0",
  },
  {
    id: 5,
    nm_supplier: "FUJI SPORT",
    alamat: "JL.SAPTA MARGA NO.131 CIBEREUM",
    supplier: "111",
    syarat_byr: "0",
  },
];

export default function DataSupplier() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // --- Pagination logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="flex flex-col">
        <div className="flex justify-between mb-5">
            <div className="flex gap-x-2">
              <Input placeholder="Cari Data" className="w-[40%]"></Input>
              <Button size="sm">Cari</Button>
            </div>
            <div className="flex gap-x-3">
              <Link href={"/supplier/add"}>
                <Button size="sm">Tambah Supplier</Button>
              </Link>
              <Link href={"/supplier"}>
                <Button size="sm">Cetak Supplier</Button>
              </Link>
            </div>
        </div>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  No
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nama Supplier
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Alamat
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  #Supplier
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Syarat Bayar
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {currentItems.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.nm_supplier}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.alamat}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.supplier}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.syarat_byr}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex">
                        <Link href={`/supplier/edit?id=${order.id}`}>
                            <PencilIcon/>
                        </Link>
                        <span className="border border-gray-500 mr-[6px] ml-[3px]"></span>
                        <button className={"text-red-800 cursor-pointer"}>
                            <CloseLineIcon/>
                        </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    <div className="flex self-center items-center bg-white dark:bg-brand-500 text-black rounded-xl mt-5">
        <button
          className="w-12 h-10 flex justify-center cursor-pointer items-center disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <Image
            src={"/assets/__.png"}
            alt="arrow left"
            width={50}
            height={50}
            className="w-3"
          ></Image>
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={clsx(
              "w-10 h-10 flex justify-center cursor-pointer items-center border border-white/15",
              currentPage === i + 1 ? "bg-blue-500 text-white" : ""
            )}
            onClick={() => setCurrentPage(i + 1)}
          >
            <p>{i + 1}</p>
          </button>
        ))}
        <button
          className="w-12 h-10 flex justify-center cursor-pointer items-center disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <Image
            src={"/assets/__.png"}
            alt="arrow left"
            width={50}
            height={50}
            className="w-3 rotate-180"
          ></Image>
        </button>
      </div>
    </div>
  );
}
