"use client";
import React, { useState, useEffect } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { ChevronLeftIcon } from "@/icons";
import DatePicker from "@/components/form/date-picker";
import SearchableSelect from "@/components/form/SearchableSelect";
import DataReturHarga from "@/components/tables/DataReturBarang";

export default function Jenis() {
  const [Tanggal, setTanggal] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setTanggal(formatted);
  }, []);

  const options = [
    { value: "ACI SUPPORT", label: "ACI SUPPORT" },
    { value: "ANEKA JAYA", label: "ANEKA JAYA" },
  ];
  const options2 = [
    { value: "00001", label: "SUPPORTER" },
    { value: "00002", label: "AKSESORIS TENIS" },
    { value: "00003", label: "BAJU + KAOS" },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-white">Retur Pembelian</h1>
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
      <ComponentCard title="Input Retur Pembelian" className="mb-5">
        <form className="space-y-6">
          <div className="flex justify-between">
            <div className="w-[49%]">
              <DatePicker
                id="date-picker"
                label="Tanggal Retur"
                defaultDate={Tanggal}
                onChange={(dates, currentDateString) => {
                  // Handle your logic
                  console.log({ dates, currentDateString });
                  setTanggal(currentDateString);
                }}
              />
            </div>
            <div className="w-[49%]">
              <Label>Nota Retur</Label>
              <Input defaultValue={"0001"} disabled></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[49%]">
              <Label>Ke Supplier</Label>
              <SearchableSelect
                options={options}
                placeholder="Pilih Satuan"
                onChange={(e) => {
                  console.log("Selected value:", e);
                }}
                className="dark:bg-dark-900"
              />
            </div>
            <div className="w-[49%]">
              <Label>Kode Supplier</Label>
              <Input defaultValue={"0001"} disabled></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[24%]">
              <Label>Nama Barang</Label>
              <SearchableSelect
                options={options2}
                placeholder="Pilih Satuan"
                onChange={(e) => {
                  console.log("Selected value:", e);
                }}
                className="dark:bg-dark-900"
              />
            </div>
            <div className="w-[24%]">
              <Label>Harga Barang</Label>
              <Input defaultValue={"30.000"} disabled></Input>
            </div>
            <div className="w-[23%]">
              <Label>Satuan</Label>
              <Input defaultValue={"PCS"} disabled></Input>
            </div>
            <div className="w-[23%]">
              <Label>Kode Barang</Label>
              <Input defaultValue={"000001"} disabled></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[49%]">
              <Label>Jumlah Retur</Label>
              <Input></Input>
            </div>
            <div className="w-[49%]">
              <Label>Stok Barang</Label>
              <Input defaultValue={"210"} disabled></Input>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[49%]">
              <Label>Harga Retur</Label>
              <Input></Input>
            </div>
            <div className="w-[49%]">
              <Label>Total Harga</Label>
              <Input defaultValue={"5.000.000"} disabled></Input>
            </div>
          </div>
          <div>
            <Button size="md" variant="primary">
              Tambah Retur
            </Button>
          </div>
        </form>
      </ComponentCard>
      <ComponentCard title="Tabel Data Retur Barang">
        <DataReturHarga />
      </ComponentCard>
    </div>
  );
}
