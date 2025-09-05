"use client";

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
import { InfoIcon } from "@/icons";

interface Order {
  id: number;
  kd_supplier: string;
  nm_supplier: string;
  alamat: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    kd_supplier: "021",
    nm_supplier: "PT ERA",
    alamat: "Jl.tegal tegal",
  },
  {
    id: 2,
    kd_supplier: "022",
    nm_supplier: "PT.BERCA SPORTINDO",
    alamat: "JLN CIKINI RAYA JAKARTA",
  },
  {
    id: 3,
    kd_supplier: "023",
    nm_supplier: "CV STAR WAY",
    alamat: "BANDUNG BANDUNG",
  },
  {
    id: 4,
    kd_supplier: "024",
    nm_supplier: "SINAR JAYA",
    alamat: "JL IR. SOEKARNO NO 75 BLITAR",
  },
  {
    id: 5,
    kd_supplier: "025",
    nm_supplier: "FUJI SPORT",
    alamat: "JL.SAPTA MARGA NO.131 CIBEREUM",
  },
];

export default function DataDaftarHutang() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // --- Pagination logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex justify-between">
        <div className="flex gap-x-2">
          <Input placeholder="Cari Data" className="w-[40%]"></Input>
          <Button size="sm">Cari</Button>
        </div>
        <div className="flex gap-x-5">
          <Link href={"/pembelian/DaftarHutang/SaldoAwal"}>
            <Button size="sm">Saldo Awal</Button>
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
                    className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                  >
                    No
                  </TableCell>
                  <TableCell
                    isHeader
                    className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                  >
                    Kode Supplier
                  </TableCell>
                  <TableCell
                    isHeader
                    className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                  >
                    Nama Supplier
                  </TableCell>
                  <TableCell
                    isHeader
                    className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                  >
                    Alamat
                  </TableCell>
                  <TableCell
                    isHeader
                    className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {currentItems.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                      {order.id}
                    </TableCell>
                    <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                      {order.kd_supplier}
                    </TableCell>
                    <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                      {order.nm_supplier}
                    </TableCell>
                    <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                      {order.alamat}
                    </TableCell>
                    <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                      <Link
                        href={`/pembelian/DaftarHutang/detail?id=${order.id}`}
                        className="mt-3 pl-2"
                      >
                        <button
                          className={"text-brand-500 scale-110 cursor-pointer"}
                        >
                          <InfoIcon />
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="dark:bg-brand-500 mt-5 flex items-center self-center rounded-xl bg-white text-black">
        <button
          className="flex h-10 w-12 cursor-pointer items-center justify-center disabled:opacity-50"
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
              "flex h-10 w-10 cursor-pointer items-center justify-center border border-white/15",
              currentPage === i + 1 ? "bg-blue-500 text-white" : "",
            )}
            onClick={() => setCurrentPage(i + 1)}
          >
            <p>{i + 1}</p>
          </button>
        ))}
        <button
          className="flex h-10 w-12 cursor-pointer items-center justify-center disabled:opacity-50"
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
