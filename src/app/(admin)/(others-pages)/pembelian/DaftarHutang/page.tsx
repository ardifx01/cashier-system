"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "next/link";
import { ChevronLeftIcon } from "@/icons";
import DataDaftarHutang from "@/components/tables/DataDaftarHutang";

export default function Hutang() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-white">Daftar Hutang Supplier</h1>
        <div className="mb-5">
          <Link
            href="/pembelian"
            className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ChevronLeftIcon />
            Kembali Ke Halaman Pembelian
          </Link>
        </div>
      </div>
      <ComponentCard title="Tabel Data Hutang Supplier">
        <DataDaftarHutang />
      </ComponentCard>
    </div>
  );
}
