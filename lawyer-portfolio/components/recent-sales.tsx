import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Sale {
  id: string
  customer: string
  date: string
  amount: string
  status: string
}

interface RecentSalesProps {
  sales: Sale[]
}

export function RecentSales({ sales }: RecentSalesProps) {
  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt="Avatar" />
            <AvatarFallback>
              {sale.customer
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.customer}</p>
            <p className="text-sm text-muted-foreground">{sale.date}</p>
          </div>
          <div className="ml-auto font-medium">
            <div className="text-right">
              <p className="text-sm font-medium">{sale.amount}</p>
              <p
                className={`text-xs ${
                  sale.status === "Delivered"
                    ? "text-green-600"
                    : sale.status === "Shipped"
                      ? "text-blue-600"
                      : "text-yellow-600"
                }`}
              >
                {sale.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
