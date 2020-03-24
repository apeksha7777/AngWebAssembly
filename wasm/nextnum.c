#include <emscripten.h>

int EMSCRIPTEN_KEEPALIVE nextnum(int n)
{
    unsigned long int fact=1;
    int i;

    for(i=1;i<=n;i++)
     fact=fact*i;
    return (fact);
}

// #include<iostream>

// // using namespace std;

// int EMSCRIPTEN_KEEPALIVE nextnum(int n)

// {

// int n,j,temp;

// int arr[200];

// arr[0]=1;

// j=0;//for index of array arr

// cout<<"Enter the number.:";

// cin>>n;

// for(;n>=2;n--)

// {

// temp=0;

// for(int i=0;i<=j;i++)

// {

// temp=(arr[i]*n)+temp;

// arr[i]=temp%10;

// temp=temp/10;

// }

// while(temp>0)//for

// {

// arr[++j]=temp%10;

// temp=temp/10;

// }

// }

// return arr;


// }