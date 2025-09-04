'use client'
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Button from "../ui/button/Button";
import { CloseLineIcon } from "@/icons";

interface Order {
  id: number;
  kd_barang: string;
  nm_barang: string;
  jumlah: string;
  harga: string;
  tot_hrg: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    jumlah: "20",
    harga: 'Rp.48.834',
    tot_hrg: 'Rp.683.676',
  },
  {
    id: 2,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    jumlah: "20",
    harga: 'Rp.48.834',
    tot_hrg: 'Rp.683.676',
  },
  {
    id: 3,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    jumlah: "20",
    harga: 'Rp.48.834',
    tot_hrg: 'Rp.683.676',
  },
  {
    id: 4,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    jumlah: "20",
    harga: 'Rp.48.834',
    tot_hrg: 'Rp.683.676',
  },
  {
    id: 5,
    kd_barang: "000001",
    nm_barang: "ABDOMINAL BAND / KORSET AGNESIS",
    jumlah: "20",
    harga: 'Rp.48.834',
    tot_hrg: 'Rp.683.676',
  },
];

export default function DataPembelian() {
  return (
    <div className="flex flex-col">
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
                  No
                </TableCell>
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
                  Jumlah
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Harga
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Total
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
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.kd_barang}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.nm_barang}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.jumlah}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.harga}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.tot_hrg}
                  </TableCell>
                   <div className="mt-3 pl-7">
                        <button className={"text-red-800 cursor-pointer scale-150"}>
                            <CloseLineIcon/>
                        </button>
                   </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    <div className="flex justify-between mt-5 items-center">
    <Button>Simpan Data</Button>
    <div className="flex gap-x-10 text-gray-400">
        <div className="flex gap-x-3">
            <p>Jumlah Item</p>
            <div className="bg-white/[0.03] border border-white/[0.03] px-3 rounded-sm">2</div>
        </div>
        <div className="flex gap-x-3">
            <p>Total</p>
            <div className="bg-white/[0.03] border border-white/[0.03] px-3 rounded-sm">Rp. 2.040.000</div>
        </div>
        <div></div>
    </div>
    </div>
    </div>
  );
}
