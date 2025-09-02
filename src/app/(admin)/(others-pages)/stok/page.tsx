'use client'
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import SearchableSelect from "@/components/form/SearchableSelect";
import DataStok from "@/components/tables/DataStok";

export default function Stok() {
    const options = [
        { value: "PCS", label: "PCS" },
        { value: "UNIT", label: "UNIT" },
        { value: "RIM", label: "RIM" },
    ];
    const options2 = [
        { value: "00001", label: "SUPPORTER" },
        { value: "00002", label: "AKSESORIS TENIS" },
        { value: "00003", label: "BAJU + KAOS" },
    ];
    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };
  return (
    <div>
    <PageBreadcrumb pageTitle="Stok"/>
        <ComponentCard title="Input Stok" className="mb-5">
        <form className="space-y-6">
          <div>
            <Label>Kode Barang</Label>
            <Input defaultValue={'000001'} disabled></Input>
          </div>
          <div className="flex justify-between">
            <div className="w-[70%]">
                <Label>Nama Barang</Label>
                <Input></Input>
            </div>
            <div className="w-[28%]">
                <Label>Satuan</Label>
                <Select
                    options={options}
                    placeholder="Pilih Satuan"
                    onChange={handleSelectChange}
                    className="dark:bg-dark-900"
                />
            </div>
          </div>
            <div>
                <Label>Jenis</Label>
                <SearchableSelect
                options={options2}
                    placeholder="Pilih Satuan"
                    onChange={handleSelectChange}
                    className="dark:bg-dark-900"
                />
            </div>
            <div>
                <Label>Stok Minim Gudang</Label>
                <Input type="number"></Input>
            </div>
            <div>
            <Button size="md" variant="primary">
              Tambah Data
            </Button>
            </div>
        </form>
        </ComponentCard>
        <ComponentCard title="Tabel Data Barang">
            <DataStok/>
        </ComponentCard>
    </div>
  );
}
