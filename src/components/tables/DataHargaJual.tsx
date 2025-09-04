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

interface Order {
  id: number;
  kd_barang: string;
  nm_barang: string;
  hrg_jual: string;
  hrg_label: string;
  kd_hrg: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
  {
    id: 2,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
  {
    id: 3,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
  {
    id: 4,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
  {
    id: 5,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
  {
    id: 6,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    hrg_jual: "65.000",
    hrg_label: "70.000",
    kd_hrg: "IXN"
  },
];

export default function DataHargaJual() {
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
        </div>
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Kode Brg
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nama Barang
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Harga Jual
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Harga Label
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Kode Harga
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {currentItems.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.kd_barang}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.nm_barang}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex items-center gap-x-1 w-[150px]">
                        Rp.
                        <Input defaultValue={order.hrg_jual}></Input>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex items-center gap-x-1 w-[150px]">
                        Rp.
                        <Input defaultValue={order.hrg_label}></Input>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="w-[150px]">
                        <Input defaultValue={order.hrg_jual}></Input>
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
