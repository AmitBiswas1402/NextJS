import { Button } from '@/components/ui/button'

function page() {
  return (
    <main className='h-full flex-col flex justify-center items-center'>
        <div>Page</div>
        
        <Button variant='blue'>
            Shadcn button
        </Button>
    </main>
  )
}

export default page