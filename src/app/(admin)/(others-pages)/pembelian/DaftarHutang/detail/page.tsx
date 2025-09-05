"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import DataPembelian from "@/components/tables/DataPembelian";
import Link from "next/link";
import { ChevronLeftIcon } from "@/icons";

export default function DetailHutang() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-white">Detail Hutang</h1>
        <div className="mb-5">
          <Link
            href="/pembelian/DaftarHutang"
            className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ChevronLeftIcon />
            Kembali Ke Halaman Daftar Hutang
          </Link>
        </div>
      </div>
      <ComponentCard title="PT.BERCA SPORTINDO" className="mb-5">
        <form className="space-y-6">
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Kode Supplier</Label>
            <div className="w-[78%]">
              <Input defaultValue={"002"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Nama Supplier</Label>
            <div className="w-[78%]">
              <Input defaultValue={"PT.BERCA SPORTINDO"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Alamat</Label>
            <div className="w-[78%]">
              <Input defaultValue={"JLN CIKINI RAYA JAKARTA"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Syarat Bayar</Label>
            <div className="w-[78%]">
              <Input defaultValue={"60 Hari"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">No.Telp</Label>
            <div className="w-[78%]">
              <Input defaultValue={"08352362353"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Nama Kontak</Label>
            <div className="w-[78%]">
              <Input defaultValue={"Bambang Putra"} disabled></Input>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-md w-[20%]">Ket.Bank</Label>
            <div className="w-[78%]">
              <Input defaultValue={"Mandiri"} disabled></Input>
            </div>
          </div>
        </form>
      </ComponentCard>
      <ComponentCard title="Tabel Data Hutang Belum Lunas" className="mb-5">
        <DataPembelian />
      </ComponentCard>
      <ComponentCard title="Tabel Data Hutang Sudah Lunas">
        <DataPembelian />
      </ComponentCard>
    </div>
  );
}
