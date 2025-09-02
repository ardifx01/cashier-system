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

interface Order {
  id: number;
  kd_barang: string;
  nm_barang: string;
  satuan: string;
  jenis: string;
  stok_awal: string;
  brg_masuk: string;
  brg_keluar: string;
  stok_akhir: string;
  minim: string;
  hrg_beli: string;
  tot_hrgbeli: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    satuan: "PCS",
    jenis: "00014",
    stok_awal: '0',
    brg_masuk: '21',
    brg_keluar: '7',
    stok_akhir: '14',
    minim: '0',
    hrg_beli: '48.834',
    tot_hrgbeli: '683.676',
  },
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    satuan: "PCS",
    jenis: "00014",
    stok_awal: '0',
    brg_masuk: '21',
    brg_keluar: '7',
    stok_akhir: '14',
    minim: '0',
    hrg_beli: '48.834',
    tot_hrgbeli: '683.676',
  },
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    satuan: "PCS",
    jenis: "00014",
    stok_awal: '0',
    brg_masuk: '21',
    brg_keluar: '7',
    stok_akhir: '14',
    minim: '0',
    hrg_beli: '48.834',
    tot_hrgbeli: '683.676',
  },
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    satuan: "PCS",
    jenis: "00014",
    stok_awal: '0',
    brg_masuk: '21',
    brg_keluar: '7',
    stok_akhir: '14',
    minim: '0',
    hrg_beli: '48.834',
    tot_hrgbeli: '683.676',
  },
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    satuan: "PCS",
    jenis: "00014",
    stok_awal: '0',
    brg_masuk: '21',
    brg_keluar: '7',
    stok_akhir: '14',
    minim: '0',
    hrg_beli: '48.834',
    tot_hrgbeli: '683.676',
  },
];

export default function DataStok() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // --- Pagination logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div className="flex flex-col">
        <div className="flex mb-5">
            <Input placeholder="Cari Data" className="w-[40%]"></Input>
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
                  Satuan
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Jenis
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Stok Awal
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Brg.Masuk
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Brg.Keluar
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Stok Akhir
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Minim
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Hrg.Beli
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Tot.HrgBeli
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
                    {order.satuan}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.jenis}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.stok_awal}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.brg_masuk}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.brg_keluar}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.stok_akhir}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.minim}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.hrg_beli}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.tot_hrgbeli}
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
