'use client'
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import DataHargaJual from "@/components/tables/DataHargaJual";

export default function Stok() {
  return (
    <div>
    <PageBreadcrumb pageTitle="Daftar Harga Jual"/>
        <ComponentCard title="Tabel Data Harga">
            <DataHargaJual/>
        </ComponentCard>
    </div>
  );
}
