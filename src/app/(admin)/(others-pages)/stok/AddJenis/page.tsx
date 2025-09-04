'use client'
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { ChevronLeftIcon } from "@/icons";
import DataJenis from "@/components/tables/DataJenis";

export default function Jenis() {
  return (
    <div>
    <div className="flex justify-between">
    <h1 className="text-white text-xl font-bold">Jenis</h1>
    <div className="mb-5">
        <Link
          href="/stok"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Kembali Ke Halaman Stok
        </Link>
    </div>
    </div>
        <ComponentCard title="Input Stok" className="mb-5">
        <form className="space-y-6">
          <div>
            <Label>Kode Jenis</Label>
            <Input defaultValue={'00001'} disabled></Input>
          </div>
            <div>
                <Label>Keterangan Jenis</Label>
                <Input></Input>
            </div>
            <div>
            <Button size="md" variant="primary">
              Tambah Jenis
            </Button>
            </div>
        </form>
        </ComponentCard>
        <ComponentCard title="Tabel Data Barang">
            <DataJenis/>
        </ComponentCard>
    </div>
  );
}
