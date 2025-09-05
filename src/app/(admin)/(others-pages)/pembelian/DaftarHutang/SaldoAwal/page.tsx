"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import SearchableSelect from "@/components/form/SearchableSelect";
import Link from "next/link";
import { ChevronLeftIcon } from "@/icons";
import DatePicker from "@/components/form/date-picker";
import DataSaldoAwalHutang from "@/components/tables/DataSaldoHutang";

export default function SaldoAwal() {
  const options = [
    { value: "CEMERLANG SPORT GROUP", label: "CEMERLANG SPORT GROUP" },
    { value: "00002", label: "AKSESORIS TENIS" },
    { value: "00003", label: "BAJU + KAOS" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-white">
          Entri Saldo Awal Hutang
        </h1>
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
      <ComponentCard title="Input Saldo" className="mb-5">
        <form className="space-y-6">
          <div className="flex justify-between">
            <div className="w-[49%]">
              <Label>Nama Supplier</Label>
              <SearchableSelect
                options={options}
                placeholder="Pilih Supplier"
                onChange={handleSelectChange}
                className="dark:bg-dark-900"
              />
            </div>
            <div className="w-[49%]">
              <Label>Saldo Hutang</Label>
              <Input defaultValue={"Rp. 2.500.000"} disabled></Input>
            </div>
          </div>
          <div>
            <Label>No Faktur</Label>
            <Input defaultValue={"001"} disabled></Input>
          </div>
          <div>
            <DatePicker
              id="date-picker"
              label="Tanggal Faktur"
              placeholder="Select a date"
              onChange={(dates, currentDateString) => {
                // Handle your logic
                console.log({ dates, currentDateString });
              }}
            />
          </div>
          <div>
            <DatePicker
              id="date-picker"
              label="Tanggal Jatuh Tempo"
              placeholder="Select a date"
              onChange={(dates, currentDateString) => {
                // Handle your logic
                console.log({ dates, currentDateString });
              }}
            />
          </div>
          <div>
            <Label>Jumlah Hutang</Label>
            <Input></Input>
          </div>
          <div>
            <Button size="md" variant="primary">
              Tambah Data
            </Button>
          </div>
        </form>
      </ComponentCard>
      <ComponentCard title="Tabel Data Saldo Awal Hutang">
        <DataSaldoAwalHutang />
      </ComponentCard>
    </div>
  );
}
