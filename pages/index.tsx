import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import AwsProvider from '../components/AwsProvider'
import AzureProvider from '../components/AzureProvider'
import GcpProvider from '../components/GcpProvider'

export default function Home() {
  const [provider, setProvider] = useState('')

  return (
    <Fragment>
      <Head>
        <title>Terraform template generator</title>
      </Head>
      <section className="flex gap-3 py-3 px-5">
        <section className="flex flex-col">
          <select className="rounded-md" value={provider} onChange={(e) => setProvider(e.target.value)}>
            <option value="aws">aws</option>
            <option value="gcp">gcp</option>
            <option value="azure">azure</option>
          </select>

          {provider === "aws" && <AwsProvider />}
          {provider === "gcp" && <GcpProvider />}
          {provider === "azure" && <AzureProvider />}

        </section>
        <section className="flex">
          <div className="min-w-[20rem]">
            <h3>Options</h3>
          </div>
          <div>
            <h3>Playground</h3>
          </div>
        </section>
      </section>
    </Fragment>
  )
}
